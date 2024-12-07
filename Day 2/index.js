const calendarContainer = document.getElementById('calendar');

for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  
  let number = document.createElement('p');
  number.innerHTML = i;
  number.classList.add("calendar-day")
  
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  
  box.appendChild(number);
  box.appendChild(icon);
  
  calendarContainer.appendChild(box);
}
