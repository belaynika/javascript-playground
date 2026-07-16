const text = "Hello World!";
let index = 0;

function typeText() {
  if (index < text.length) {
    const span = document.createElement("span");
    span.textContent = text[index];
    span.style.opacity = 0;
    document.body.appendChild(span);

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
