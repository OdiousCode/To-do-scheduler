let AddToDoButton = document.getElementById("addTodo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

AddToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});

let addTodoBtn = document.getElementById("addTodoBtn");
let modalElem = document.getElementById("modal");
let closeBtn = document.getElementById("close");
let submitBtn = document.getElementById("submitBtn");

addTodoBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", hideModal);

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let taskItem = document.getElementById("taskItem");
  let taskDate = document.getElementById("taskDate");
  saveTask([taskItem.value, taskDate.value]);
  hideModal();
});

function hideModal() {
  modalElem.style.display = "none";
}

function showModal() {
  modalElem.style.display = "block";
}

function saveTask(task) {
  localStorage.setItem("task", [task]);
}

function getTask() {
  return localStorage.getItem("task");
}
