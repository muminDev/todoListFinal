const toDoList = [];
const inputList = document.querySelector('.todo-input');
const listContainer = document.querySelector('.todo-list');
const dateInputElement = document.querySelector('.js-due-date')

function toDoAdd() {
  const toDo = inputList.value;
  const dateInput = dateInputElement.value;
  if (toDo) { // Check if the input is not empty
    toDoList.unshift({
      name: toDo,
      dueDate: dateInput
      });

    inputList.value = ''; // Clear the input field
    displayToDoList();
  }
}

function displayToDoList() {
  listContainer.innerHTML = ''; // Clear the existing list
  toDoList.forEach(function(toDoObject, index){
    const name = toDoObject.name;
    const dueDate = toDoObject.dueDate;
    const html = `
    <div class = 'todo-text'>${name}</div>
    <div class = 'todo-text'>${dueDate}</div>
    <button class='delete-button' 
      onclick='
        toDoList.splice(${index}, 1);
        displayToDoList()
      '>Delete</button>
    `;
    listContainer.innerHTML += html;
  });
}