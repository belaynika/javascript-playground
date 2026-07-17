document.addEventListener('click', function(event) {
    
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  
  confetti.style.left = event.pageX + 'px';
  confetti.style.top = event.pageY + 'px';
  
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F3'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.backgroundColor = randomColor;
  
  document.body.appendChild(confetti);
  
  setTimeout(() => {
    confetti.style.transform = `translateY(100px) rotate(${Math.random() * 360}deg)`;
    confetti.style.opacity = '0';
  }, 50);
  

  setTimeout(() => {
    confetti.remove();
  }, 1050);
});