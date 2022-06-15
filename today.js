(()=> {
    "use strict";
    let months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
    let weekDays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

    let currentMonthElem = document.getElementById("currentMonth");
    let currentYearElem = document.getElementById("currentYear");
    let daysElem = document.getElementById("days");
    
    let date = new Date();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let daysInMonth = new Date(year, month, 0).getDate();
    let days;
    

    for (let i = 1; i <= daysInMonth; i++) {
        days = document.createElement("li");
        if(i == date.getDate()) {
            days.classList.add("active");
        }
        days.innerHTML = i;
        daysElem.appendChild(days);    
    }
        
    
    currentMonthElem.innerHTML = months[month - 1];
    currentYearElem.innerHTML = date.getFullYear();

})();

