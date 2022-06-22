let date = document.getElementById("date");
let time = document.getElementById("time");
let monthLabel = document.getElementById("currentMonth");

let dayContainer = document.getElementById("dayContainer");

function getDate() {
  var currentdate = new Date();

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  date.innerText = currentdate.toLocaleDateString("en-US", options);
  time.innerText =
    String(currentdate.getHours()).padStart(2, "0") +
    ":" +
    String(currentdate.getMinutes()).padStart(2, "0");

  var t = setTimeout(function () {
    getDate();
  }, 1000);
}

function getMonth() {
  var currentdate = new Date();
  monthLabel.innerHTML = currentdate.toLocaleString("en-us", { month: "long" });
  var day = currentdate.getDate();
  var month = currentdate.getMonth();
  var year = currentdate.getFullYear();
  daysInMonth = new Date(year, month + 1, 0).getDate();
  startingDay = new Date(year + "-" + (month + 1) + "-01").getDay();
  setActive(day - 1);
  for (let i = 1; i < startingDay; i++) {
    let li = document.createElement("li");
    li.classList.add("disabled");
    dayContainer.appendChild(li);
  }
  for (var i = 0; i < daysInMonth; i++) {
    let li = document.createElement("li");
    li.innerText = i + 1;
    if (i + 1 == day) {
      li.classList.add("active");
    }

    li.setAttribute("onclick", "setActive(" + i + ");");
    dayContainer.appendChild(li);
  }
}
function setActive(day) {
  let days = document.getElementById("dayContainer").children;

  for (var i = 0; i < days.length; i++) {
    {
      if (days[i].classList.contains("active")) {
        days[i].classList.remove("active");
      }
      if (days[i].innerHTML == day + 1) {
        days[i].classList.add("active");
      }
    }
  }

  currentdate = new Date();
  month = currentdate.getMonth();
  year = currentdate.getFullYear();
  activeDate = new Date(year, month, day + 1);

  var options = {
    month: "long",
    day: "numeric",
  };
  todo = document.getElementById("activeDay");
  todo.innerText = "Todo " + activeDate.toLocaleDateString("en-US", options);
  activeDate.setDate(activeDate.getDate() + 1);
  todos = document.getElementById("todolist").children;
  for (var i = 0; i < todos.length; i++) {
    isoDate = activeDate.toISOString().split("T")[0];
    //2022-06-21
    if (todos[i].dataset.date == isoDate) {
      todos[i].style.display = "block";
    } else {
      todos[i].style.display = "none";
    }
  }
}
function deselectDay() {
  let days = document.getElementById("dayContainer").children;

  for (var i = 0; i < days.length; i++) {
    {
      if (days[i].classList.contains("active")) {
        days[i].classList.remove("active");
      }
    }
  }
  todo = document.getElementById("activeDay");
  todo.innerText = "";
  todos = document.getElementById("todolist").children;
  for (var i = 0; i < todos.length; i++) {
    todos[i].style.display = "none";
  }
}

getDate();
getMonth();
