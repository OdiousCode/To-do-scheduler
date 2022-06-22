let addTodoBtn = document.getElementById("addTodoBtn");
let addTodoModal = document.getElementById("addTodoModal");
let editTodoModal = document.getElementById("editTodoModal");
let closeBtn = document.getElementById("close");
let submitBtn = document.getElementById("submitBtn");
let editBtnSubmit = document.getElementById("editBtnSubmit");
let deleteBtn = document.getElementById("deleteBtn");
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

// TODO: edit todo
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

// Delete todo
deleteBtn.addEventListener("click", (event) => {
  let taskDetail = document.getElementById("taskDetail");

  tasks.map((item) => {
    if (item[0] === taskDetail.value) {
      tasks.splice(tasks.indexOf(item), 1);
      localStorage.setItem("task", JSON.stringify(tasks));
    }
  });
  hideEditTodoModal();
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
