// Wrap the initialization in a window load event listener
window.addEventListener('load', () => {
  const canvas = document.getElementById('snow_style.css');
  const ctx = canvas.getContext('2d');

  // Set the canvas size to match the browser window exactly
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Create an array to hold all our individual snowflake objects
  const snowflakes = [];
  const maxSnowflakes = 100;

  // Generate the initial snowflakes
  for (let i = 0; i < maxSnowflakes; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      density: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.6 + 0.2
    });
  }

  // The main animation loop that draws the screen over and over
  function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < maxSnowflakes; i++) {
      const flake = snowflakes[i];

      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
      ctx.fill();

      flake.y += flake.density;
      flake.x += Math.sin(flake.y / 30) * 0.5;

      if (flake.y > canvas.height) {
        snowflakes[i] = {
          x: Math.random() * canvas.width,
          y: -10,
          radius: flake.radius,
          density: flake.density,
          opacity: flake.opacity
        };
      }
    }

    requestAnimationFrame(drawSnow);
  }


  drawSnow();
});