document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  
  
  
  const taskForm = document.querySelector("#create-task-form")
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const taskValue = document.querySelector('#new-task-description')
    const taskList = document.querySelector('#tasks')
    const newTask = document.createElement('li')
    newTask.textContent = taskValue.value

    const priority = document.querySelector('#priority')
    
     if (priority.value === "High") {
      newTask.classList.add('red')
    } else if (priority.value === 'Medium') {
      newTask.classList.add('yellow')
    } else {
      newTask.classList.add('green')
    }
  
    
    const delBtn = document.createElement('button')
    delBtn.textContent = 'Delete'
    delBtn.addEventListener('click', (event) => {
      newTask.remove()
    })



    newTask.append(delBtn)
    taskList.append(newTask)
  } )

  
});
