const toDoList = [];
const inputList = document.querySelector('.todo-input');
const listContainer = document.querySelector('.todo-list');
const dateInputElement = document.querySelector('.js-due-date')

function toDoAdd() {
  const toDo = inputList.value;
  const dateInput =dateInputElement.value;
  if (toDo) { // Check if the input is not empty
    toDoList.push({
      name: toDo,
      dueDate: dateInput
      });

    inputList.value = ''; // Clear the input field
    displayToDoList();
  }
}

function displayToDoList() {
  listContainer.innerHTML = ''; // Clear the existing list

  for (let i = 0; i < toDoList.length; i++) {
    const toDoObject = toDoList[i];
    const name = toDoObject.name;
    const dueDate = toDoObject.dueDate;
    const html = `
    <p>${name} ${dueDate}
      <button onclick='
        toDoList.splice(${i}, 1);
        displayToDoList()
      '>Delete</button>
    </p>`;
    listContainer.innerHTML += html;
  }
  console.log(toDoList);
}