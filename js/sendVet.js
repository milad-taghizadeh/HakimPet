// Function to convert Gregorian date to Shamsi date
function convertToShamsiDate(date) {
  const shamsiDate = new Intl.DateTimeFormat("fa-IR").format(date);
  return shamsiDate;
}

// Function to open the date picker
function openDatePicker() {
  const datePicker = document.querySelector(".datepicker");
  datePicker.style.display = "block";
}

// Function to close the date picker
function closeDatePicker() {
  const datePicker = document.querySelector(".datepicker");
  datePicker.style.display = "none";
}

// Function to set the selected date in the input field
function setDate(date) {
  const inputField = document.querySelector("#shamsi-date");
  inputField.value = convertToShamsiDate(date);
  closeDatePicker();
}

// Function to generate the calendar for the selected month and year
function generateCalendar(year, month) {
  const calendar = document.querySelector(".calendar");

  // Clear the previous calendar
  calendar.innerHTML = "";

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const currentDate = new Date();

  // Generate the table headers
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const headerRow = document.createElement("tr");

  const prevMonthButton = document.createElement("th");
  prevMonthButton.textContent = "<";
  prevMonthButton.addEventListener("click", () => {
    generateCalendar(month === 0 ? year - 1 : year, month === 0 ? 11 : month - 1);
  });

  const monthName = document.createElement("th");
  monthName.textContent = new Intl.DateTimeFormat("fa-IR", { month: "long", year: "numeric" }).format(
    new Date(year, month, 1)
  );
  monthName.colSpan = 5;

  const nextMonthButton = document.createElement("th");
  nextMonthButton.textContent = ">";
  nextMonthButton.addEventListener("click", () => {
    generateCalendar(month === 11 ? year + 1 : year, month === 11 ? 0 : month + 1);
  });

  headerRow.appendChild(prevMonthButton);
  headerRow.appendChild(monthName);
  headerRow.appendChild(nextMonthButton);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Generate the table cells for the days
  const daysRow = document.createElement("tr");

  for (let i = 0; i < 7; i++) {
    const dayCell = document.createElement("th");
    dayCell.textContent = new Intl.DateTimeFormat("fa-IR", { weekday: "short" }).format(
      new Date(year, month, i)
    );
    daysRow.appendChild(dayCell);
  }

  tbody.appendChild(daysRow);

  let day = 1;

  for (let i = 0; i < 6; i++) {
    const weekRow = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const dayCell = document.createElement("td");

      if (i === 0 && j < firstDayOfMonth) {
        dayCell.classList.add("disabled");
      } else if (day > daysInMonth) {
        dayCell.classList.add("disabled");
      } else {
        dayCell.textContent = day;
        dayCell.addEventListener("click", () => {
          setDate(new Date(year, month, day));
        });

        if (
          currentDate.getFullYear() === year &&
          currentDate.getMonth() === month &&
          currentDate.getDate() === day
        ) {
          dayCell.classList.add("current");
        }

        day++;
      }

      weekRow.appendChild(dayCell);
    }

    tbody.appendChild(weekRow);
  }

  table.appendChild(tbody);
  calendar.appendChild(table);
}

// Attach event listeners
const inputField = document.querySelector("#shamsi-date");
inputField.addEventListener("click", openDatePicker);

document.addEventListener("click", (event) => {
  if (!inputField.contains(event.target) && !document.querySelector(".datepicker").contains(event.target)) {
    closeDatePicker();
  }
});

// Generate the calendar for the current month
const currentDate = new Date();
generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

// SendVet to AdminPanel
document.getElementById('SendVetSubmit').addEventListener('click', sendVetData);
function sendVetData() {
  const date = document.getElementById('shamsi-date').value;
  console.log(document.getElementById('shamsi-date').value);
  const sendVetDate = {
    userId: "64f4cd691aa78515f257d329",
    date: date
  };
  fetch('http://localhost:3000/api/v0/SV/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(sendVetDate)
  })
    .then(response => response.json())
    .then(sendVetDate => {
      console.log('Success:', sendVetDate);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}