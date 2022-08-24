
console.log('this is a to-do app')

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
      ${taskTitle.value}
      <button class="to-do__exclude">x</button>
      <button class="to-do__edit">Editar</button>
      ` 
      const list = document.querySelector('#list')

      list?.appendChild(newItem)

      clearInput()


})