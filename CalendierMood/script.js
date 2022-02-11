const currentYear = 2020;
const weekDays = ["Dim", "Lun", "Mar", "Mer", "Jeudi", "Ven", "Sam"];
const months = [
  "Janvier",
  "Février",
  "mars",
  "Avril",
  "Mai",
  "Join",
  "Juillet",
  "Aout",
  "Septembre",
  "Octombre",
  "Novembre",
  "Decembre"
];
const colors = ["#2d6b5f", "#72e3a6", "#dff4c7", "#edbf98", "#ea3d36"];
const defaultColor = "#888";
let activeColor = "";

const calendar = document.getElementById("calendar");
const moods = document.querySelectorAll(".mood");
const clear = document.querySelector("#clear");

moods.forEach(mood => {
  mood.addEventListener("click", () => {
   
    if (mood.classList.contains("selected")) {
      mood.classList.remove("selected");
      activeColor = defaultColor;
    } else {
      moods.forEach(mood => {
        mood.classList.remove("selected");
      });

      mood.classList.add("selected");
      activeColor = getComputedStyle(mood).getPropertyValue("color");
    }
  });
});

const getAllDays = year => {
  
  const firstDay = new Date(`January 1 ${year}`);
  
  const lastDay = new Date(`December 31 ${year}`);

  
  const days = [firstDay];

  
  let lastDayInArray = firstDay;

  
  while (lastDayInArray.getTime() !== lastDay.getTime()) {
    days.push(addDays(lastDayInArray, 1));
    lastDayInArray = days[days.length - 1];
  }

  return days;
};

const dates = getAllDays(currentYear);

let monthsHTML = "";

// loop pour crée des jours pour chaques mois 
months.forEach((month, idx) => {
  monthsHTML += `<div class="months month_${idx}">
        <h3>${month}</h3>
        <div class="week_days_container">
            ${weekDays
              .map(day => `<div class="week_days">${day}</div>`)
              .join("")}
        </div>
        <div class="days_container"></div>
    </div>`;
});

calendar.innerHTML = monthsHTML;

// Loop over each day and
dates.forEach(date => {
  const month = date.getMonth();
  const monthEl = document.querySelector(`.month_${month} .days_container`);

  // create extra day slots if needed before day 1
  if (date.getDate() === 1 && date.getDay() !== 0) {
    for (let i = 0; i < date.getDay(); i++) {
      const emptySpot = createEmptySpot();

      monthEl.appendChild(emptySpot);
    }
  }

  const dateEl = createDateEl(date);

  monthEl.appendChild(dateEl);
});

// Add click event to all the .circles
const circles = document.querySelectorAll(".circle");
circles.forEach(circle => {
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = activeColor;
  });
});

// Randomize functionality
randomize.addEventListener("click", () => {
  circles.forEach(circle => {
    circle.style.backgroundColor = getRandomColor();
  });
});

// Clear functionality
clear.addEventListener("click", () => {
  circles.forEach(circle => {
    circle.style.backgroundColor = defaultColor;
  });
});

function getRandomColor() {
  return colors[Math.floor(Math.random() * 5)];
}

function createDateEl(date) {
  const day = date.getDate();
  const dateEl = document.createElement("div");
  dateEl.classList.add("days");
  dateEl.innerHTML = `<span class="circle">${day}</span>`;

  return dateEl;
}

function createEmptySpot() {
  const emptyEl = document.createElement("div");
  emptyEl.classList.add("days");

  return emptyEl;
}

// function from StackOverflow: https://stackoverflow.com/questions/563406/add-days-to-javascript-date
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

//panneau social  
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});
