let weekday = document.getElementById("weekday");
let date = document.getElementById("date");
let time = document.getElementById("time");

function getDate() {
  var currentdate = new Date();

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  var dd = String(currentdate.getDate()).padStart(2, "0");
  var mm = String(currentdate.getMonth() + 1).padStart(2, "0");
  var yyyy = currentdate.getFullYear();

  date.innerText = currentdate.toLocaleDateString("en-US", options);
  time.innerText =
    String(currentdate.getHours()).padStart(2, "0") +
    ":" +
    String(currentdate.getMinutes()).padStart(2, "0");

  var t = setTimeout(function () {
    getDate();
  }, 1000);
}
getDate();
