let addTodoBtn = document.getElementById("addTodoBtn");
let modalElem = document.getElementById("modal");
let closeBtn = document.getElementById("close");
let submitBtn = document.getElementById("submitBtn");
let todosList = document.getElementById("todolist");

addTodoBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", hideModal);

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let taskItem = document.getElementById("taskItem");
  let taskDate = document.getElementById("taskDate");
  saveTask([taskItem.value, taskDate.value]);
  hideModal();
});

let tasks = getTask();
let li, aTag;

if (tasks) {
  tasks.map((task) => {
    li = document.createElement("li");
    aTag = document.createElement("a");
    aTag.innerText = task[0];
    aTag.href = "#";
    li.appendChild(aTag);
  });
  console.log("aTag");
}

function hideModal() {
  modalElem.style.display = "none";
}

function showModal() {
  modalElem.style.display = "block";
}

function saveTask(task) {
  let tasks = getTask() || [];
  tasks.push(task);
  localStorage.setItem("task", JSON.stringify(tasks));
}

function getTask() {
  return JSON.parse(localStorage.getItem("task"));
}
