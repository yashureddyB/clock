function updateClock() {
  const currentDate = new Date(); 
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  
  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}


updateClock();


setInterval(updateClock, 1000);
