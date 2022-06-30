let addTodoBtn = document.getElementById("addTodoBtn");
let addTodoModal = document.getElementById("addTodoModal");
let editTodoModal = document.getElementById("editTodoModal");
let closeAddBtn = document.getElementById("close");
let closeEditBtn = document.getElementById("closeEdit");
let submitBtn = document.getElementById("submitBtn");
let editBtnSubmit = document.getElementById("editBtnSubmit");
let deleteBtn = document.getElementById("deleteBtn");
let todosList = document.getElementById("todolist");
let tasks = getTask();
let todoArr = [];

// add todo modal
addTodoBtn.addEventListener("click", showAddTodoModal);

// close todo modal
closeAddBtn.addEventListener("click", hideAddTodoModal);
closeEditBtn.addEventListener("click", hideEditTodoModal);

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
  window.location.reload();
});

// edit todo
editBtnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  let taskDetail = document.getElementById("taskDetail");
  let taskDateDetail = document.getElementById("taskDateDetail");

  tasks = tasks.map((item) => {
    if (item[0] === todoArr[0][0]) {
      item[0] = taskDetail.value;
      item[1] = taskDateDetail.value;
    }
    return item;
  });
  localStorage.setItem("task", JSON.stringify(tasks));
  hideEditTodoModal();
  window.location.reload();
});

// delete todo
deleteBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let specificTask = document.getElementById("taskDetail").value;
  tasks = tasks.filter((task) => task[0] !== specificTask);
  localStorage.setItem("task", JSON.stringify(tasks));
  hideEditTodoModal();
  window.location.reload();
});

// show todos
if (tasks) {
  tasks.map((task) => {
    let liElem = document.createElement("li");
    liElem.classList = "todosList";
    var todoDate = task[1];
    todoTime = todoDate.split("T").pop();
    todoDate = todoDate.split("T").shift();
    liElem.innerHTML = `
      <b class="todoItemDate">
        ${todoDate} 
      </b>
      ${task[0]} ${todoTime} CET
    `;

    liElem.dataset.date = todoDate;
    todosList.appendChild(liElem);
    liElem.addEventListener("click", showEditTodoModal);
  });
}

// helper functions

function hideAddTodoModal() {
  addTodoModal.style.display = "none";
}

function hideEditTodoModal() {
  editTodoModal.style.display = "none";
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
  let specificTask = e.target.innerText.split(/\s/);
  let data = tasks.filter((task) => task[0] === specificTask[1]);

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
