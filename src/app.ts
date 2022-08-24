
console.log('this is a to-do app')

import '../style/style.less'

const btnAddTask = document.querySelector('#addTask')
const taskTitle = document.querySelector('#taskTitle') as HTMLInputElement

const clearInput = () => {
  taskTitle.value = ''
}

btnAddTask?.addEventListener('click', () => {
   
    const newItem = document.createElement('div') 
      newItem.classList.add('to-do__item')

      newItem.innerHTML = `
      <input type="checkbox">
      <span>${taskTitle.value}</span>
      <button class="to-do__edit" id="remove">Remover</button>
      <button class="to-do__edit" id="edit">Editar</button>
      ` 
      const list = document.querySelector('#list')

      list?.appendChild(newItem)

      clearInput()

      const btnEdit = document.querySelectorAll('#edit')?.forEach(element => {
          element.addEventListener('click', editTask)
      })

      const btnRemove= document.querySelectorAll('#remove')?.forEach(element => {
        element.addEventListener('click', removeTask)
    })
      
})

const editTask = (event : any) => {
 taskTitle.value = event.target.previousElementSibling.previousElementSibling.textContent
const action = document.querySelector('#action')
if(action) action.innerHTML = `<button id="addTask" class="to-do--button-edit" >Alterar tarefa</button>`

 
  
}

const removeTask = (event : any) => {
  event.target.parentElement.remove()
   
 }
 

