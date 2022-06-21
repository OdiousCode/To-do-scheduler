let addTodoBtn = document.getElementById("addTodoBtn");
let addTodoModal = document.getElementById("addTodoModal");
let editTodoModal = document.getElementById("editTodoModal");
let closeBtn = document.getElementById("close");
let submitBtn = document.getElementById("submitBtn");
let editBtnSubmit = document.getElementById("editBtnSubmit");
let todosList = document.getElementById("todolist");
let tasks = getTask();
let todoArr = [];
// add todo modal
addTodoBtn.addEventListener("click", showAddTodoModal);

// close todo modal
closeBtn.addEventListener("click", hideAddTodoModal);

// add todo handler
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let taskItem = document.getElementById("taskItem");
  let taskDate = document.getElementById("taskDate");
  let task = [taskItem.value, taskDate.value];
  if (taskItem.value != "" && taskDate.value != "") {
    saveTask(task);
  }
  hideAddTodoModal();
});

// edit todo handler
// get the new value
// match it to the old value
// save new value
editBtnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  let taskDetail = document.getElementById("taskDetail");
  let taskDateDetail = document.getElementById("taskDateDetail");

  todoArr.map((item1) => {
    tasks.map((item2) => {
      if (item1[0] == item2[0]) {
        item2[0] = taskDetail.value;
        item2[1] = taskDateDetail.value;
      }
    });
  });
});

// show todos
if (tasks) {
  tasks.map((task) => {
    let liElem = document.createElement("li");
    liElem.innerHTML = task[0];
    todosList.appendChild(liElem);
    liElem.addEventListener("click", showEditTodoModal);
  });
}

// helper functions

function hideAddTodoModal() {
  addTodoModal.style.display = "none";
}

function showAddTodoModal() {
  addTodoModal.style.display = "block";
}

function hideEditTodoModal() {
  editTodoModal.style.display = "none";
}

function showEditTodoModal(e) {
  editTodoModal.style.display = "block";
  let inputField = document.getElementById("taskDetail");
  let inputDate = document.getElementById("taskDateDetail");

  let data = tasks.filter((task) => task[0] === e.target.innerText);
  inputField.value = data[0][0];
  inputDate.value = data[0][1];

  todoArr.push([taskDetail.value, taskDateDetail.value]);
}

function saveTask(task) {
  let tasks = getTask() || [];
  tasks.push(task);
  localStorage.setItem("task", JSON.stringify(tasks));
}

function getTask() {
  return JSON.parse(localStorage.getItem("task"));
}
