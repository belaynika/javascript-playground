const canvas = document.getElementById('snowCanvas');
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
const maxSnowflakes = 100; // Increase for blizzard

// Generate the initial snowflakes
for (let i = 0; i < maxSnowflakes; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,       // Random starting width position
    y: Math.random() * canvas.height,      // Random starting height position
    radius: Math.random() * 3 + 1,         // Random snowflake size (1px to 4px)
    density: Math.random() * 1 + 0.5,      // Random fall speed
    opacity: Math.random() * 0.6 + 0.2     // Some bright flakes, some faint deep ones
  });
}

// The main animation loop that draws the screen over and over
function drawSnow() {
  // Clear the canvas from the previous frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Loop through every snowflake and update it
  for (let i = 0; i < maxSnowflakes; i++) {
    const flake = snowflakes[i];

    // Draw the snowflake on the canvas
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
    ctx.fill();

    // Move the snowflake down
    flake.y += flake.density;
    // Add a tiny sway from left to right so it drifts naturally
    flake.x += Math.sin(flake.y / 30) * 0.5;

    // If a snowflake hits the bottom of the screen, send it back to the top
    if (flake.y > canvas.height) {
      snowflakes[i] = {
        x: Math.random() * canvas.width,
        y: -10, // Start just off-screen at the top
        radius: flake.radius,
        density: flake.density,
        opacity: flake.opacity
      };
    }
  }

  // Tell the browser to run this function again on the next screen refresh frame
  requestAnimationFrame(drawSnow);
}

drawSnow();