function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  
  // Get hours, minutes, and seconds, and make sure they always have 2 digits
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  // Put the time into our HTML
  clockElement.innerText = `${hours}:${minutes}:${seconds}`;
  
  // Every second, pick a random neon color for the text
  const randomHue = Math.floor(Math.random() * 360);
  clockElement.style.color = `hsl(${randomHue}, 100%, 60%)`;
}

// Run it right away, then tell it to run every 1000 milliseconds (1 second)
updateClock();
setInterval(updateClock, 1000);