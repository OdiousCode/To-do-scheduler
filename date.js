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
  var month = currentdate.getMonth();
  var year = currentdate.getFullYear();
  daysInMonth = new Date(year, month + 1, 0).getDate();
  startingDay = new Date().getDay();
  console.log(startingDay);
  for (let i = 1; i < startingDay; i++) {
    let li = document.createElement("li");
    li.classList.add("disabled");
    dayContainer.appendChild(li);
  }
  for (var i = 0; i < daysInMonth; i++) {
    let li = document.createElement("li");
    li.innerText = i + 1;
    dayContainer.appendChild(li);
  }
}

getDate();
getMonth();
