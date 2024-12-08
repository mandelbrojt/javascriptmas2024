const calendarContainer = document.getElementById('calendar');

const weekDays = [
  "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday", "Sunday"
]

for (let i = 1; i <= 31; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-circle');
  
  let number = document.createElement('p');
  number.innerHTML = i;
  number.classList.add("calendar-day")
  
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  
  box.appendChild(number);
  box.appendChild(icon);
  
  calendarContainer.appendChild(box);
}
