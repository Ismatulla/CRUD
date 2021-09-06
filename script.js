const input = document.querySelector('#itemInput')
const button = document.querySelector('.btn-green')
const itemContainer = document.querySelector('.item-container')
const alert = document.querySelector('.alert')
const itemList = document.querySelector('.item-list')

/* Icons */
let checkIcon = '<a href="#" class="check icons"><i class="far fa-check-circle"></i></a>' 
let editIcon = '<a href="#" class="edit icons"><i class="far fa-edit"></i></a>'
let deleteIcon = '<a href="#" class="delete icons"><i class="far fa-times-circle"></i></a>'

const icons = `${checkIcon} ${editIcon} ${deleteIcon}`


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
    let itemIcons = document.createElement('div')
    const item = document.createElement('div')
    const deleteItem = document.createElement('div')
    deleteItem.append(deleteIcon)
    item.classList.add('item')
    const h5 = document.createElement('h5')
    h5.classList.add('item-name')
    h5.innerText = input.value
    itemIcons.classList.add('item-icons')
    
    itemIcons.innerHTML = deleteItem

    item.append(h5,itemIcons) 
    itemList.appendChild(item)
    alert.style.display = 'none'
    input.value = ''  

 
        
    }


/* CHECKLIST */
