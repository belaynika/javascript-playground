const text = "Hello World!";
let index = 0;

function typeText() {
  if (index < text.length) {
    const container = document.getElementById("animated-text");
    
    const span = document.createElement("span");
    span.textContent = text[index];
    span.style.opacity = 0;
    
    // 2. Put the letter inside that container box!
    container.appendChild(span);

    let opacity = 0;
    const fade = setInterval(() => {
      opacity += 0.05;
      span.style.opacity = opacity;
      if (opacity >= 1) clearInterval(fade);
    }, 20);

    index++;
    setTimeout(typeText, 100);
  }
}

typeText();