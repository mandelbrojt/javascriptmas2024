const calendarContainer = document.getElementById('calendar');

const weekDays = [
  "Sunday", "Monday", "Tuesday",
  "Wednesday", "Thursday", "Friday", "Saturday"
]

for (let weekDay of weekDays) {
  let weekDayBox = document.createElement('li')
  weekDayBox.classList.add("calendar-weekday-box")

  let weekDayName = document.createElement('p')
  weekDayName.innerHTML = weekDay.slice(0,3).toUpperCase()
  weekDayName.classList.add('weekday-name')

  weekDayBox.appendChild(weekDayName)

  calendarContainer.appendChild(weekDayBox)
}

for (let i = 1; i <= 31; i++) {
  
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
