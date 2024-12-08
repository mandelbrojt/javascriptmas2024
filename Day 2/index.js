const calendarContainer = document.getElementById('calendar');

const weekDays = [
  "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday", "Sunday"
]

for (let i = -7; i <= 31; i++) {
  
  let circle = document.createElement('li');
  circle.classList.add('calendar-circle');
  
  let number = document.createElement('p');
  number.innerHTML = i;
  number.classList.add("calendar-day")
  
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  
  circle.appendChild(number);
  circle.appendChild(icon);
  
  calendarContainer.appendChild(circle);
}
