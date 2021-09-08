const form = document.querySelector('.todo-form');
const input = document.querySelector('.todo-input')
const ul = document.querySelector('.todo-items')

let todos = []

form.addEventListener('submit',function(event){
    event.preventDefault()
    addTodo(input.value)
})


function addTodo(item){
    if(item !==''){
        const todo = {
            id: Date.now(),
            name:item,
            completed:false
        }

        todos.push(todo)
       addToLocalStorage(todos)
        input.value = ''
    }
}

function renderTodos(todos){
     ul.innerHTML = ''
 
     todos.forEach(function(item){
        const checked = item.completed ? 'checked':null;
        const li = document.createElement('li')
        li.setAttribute('class','item')
        li.setAttribute('data-key',item.id);
        
        if(item.completed === true){
            li.classList.add('checked')

        }

        li.innerHTML = `<input type="checkbox" class="checkbox" ${checked}>
        ${item.name} <button class="delete-button">X</button>`;
         ul.append(li)
    })
}

function addToLocalStorage(todos){
    localStorage.setItem('todos',JSON.stringify(todos));
    renderTodos(todos)
}

function getFromLocalStorage(){
    const reference = localStorage.getItem('todos')

    if(reference){
        todos = JSON.parse(reference)
        renderTodos(todos)
    }
}
getFromLocalStorage()


ul.addEventListener('click',function(e){
    e.preventDefault()
    if(e.target.type === 'checkbox'){
        toggle(e.target.parentElement.getAttribute('data-key'))
        console.log(e.target)
    }

    if(e.target.classList.contains('delete-button')){
        deleteTodo(e.target.parentElement.getAttribute('data-key'))
    }
})



function toggle(id){
    todos.forEach(function(item){
  if(item.id == id){
      item.completed = !item.completed
  }
    })
    addToLocalStorage(todos)
}



function deleteTodo(id){
    todos = todos.filter(function(item){
        return item.id !=id
    })

    // update localStorage
    addToLocalStorage(todos)
}

getFromLocalStorage()
