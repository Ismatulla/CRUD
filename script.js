const input = document.querySelector('#itemInput')
const button = document.querySelector('.btn-green')
const itemContainer = document.querySelector('.item-container')
const alert = document.querySelector('.alert')
const itemList = document.querySelector('.item-list')
const clearButton = document.querySelector('.clearButton')
/* Icons */
let checkIcon = '<a href="#" class="check icons"><i class="far fa-check-circle"></i></a>' 
let editIcon = '<a href="#" class="edit icons"><i class="far fa-edit"></i></a>'
let deleteIcon = '<a href="#" class="delete icons"><i class="far fa-times-circle"></i></a>'


/* EVENT LISTENER */

button.addEventListener('click',(e)=>{
e.preventDefault()
 warning()
})

/* Warning !!! */

function warning(){
    if(input.value === ''){
        alert.style.display = 'flex'
        setTimeout(()=>{
        alert.style.display = 'none'
            },2000)
    }else{
       check()
    }
}

/* Function Check */

function check(){

    let checkIcons = document.createElement('button')
    let editIcons = document.createElement('button')
    let deleteIcons = document.createElement('button')
    const item = document.createElement('div')

    checkIcons.classList.add('item-icons')
    editIcons.classList.add('item-icons')
    deleteIcons.classList.add('item-icons')
    checkIcons.innerHTML = checkIcon
    editIcons.innerHTML = editIcon
    deleteIcons.innerHTML = deleteIcon
    

    item.classList.add('item')
    const h5 = document.createElement('h5')
    h5.innerText = input.value
   
    item.append(h5,checkIcons,editIcons,deleteIcons) 

    itemList.appendChild(item)
    alert.style.display = 'none'
    input.value = ''  
     

    checkIcons.addEventListener('click',()=>{
        h5.classList.add('item-name')
       
    })


    editIcons.addEventListener('click',()=>{
        item.remove()
        input.value = h5.innerText
    })
    
    deleteIcons.addEventListener('click',()=>{
        item.remove()
    })
       
    document.querySelector('.clearButton').addEventListener('click',()=>{
        item.remove()
        
    })

   
    }
   
     



