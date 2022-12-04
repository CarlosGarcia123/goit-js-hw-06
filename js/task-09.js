const button = document.querySelector(".change-color");
const color = document.querySelector(".color");

const bodyColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  color.innerHTML = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", bodyColor);
