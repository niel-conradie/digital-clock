// Get element by id and store in immutable variable.
const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function updateClock() {
  // Get the current time and store in mutable variable.
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let ampm = "AM";

  // AM/PM condition.
  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  }

  // Double digit conditions.
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  // Update element by id with current time variable.
  hourElement.innerText = hour;
  minuteElement.innerText = minute;
  secondElement.innerText = second;
  ampmElement.innerText = ampm;

  // Call function every second.
  setTimeout(() => {
    updateClock();
  }, 1000);
}

// Call function.
updateClock();
