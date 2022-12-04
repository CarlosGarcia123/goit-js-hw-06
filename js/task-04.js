var counterValue = 0;
var contador = document.querySelector("#value").value;
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

const rest = () => {
  if (btnDecrement) {
    counterValue--;
  }
  document.querySelector("#value").textContent = counterValue;
};

const sum = () => {
  if (btnIncrement) {
    counterValue++;
  }
  document.querySelector("#value").textContent = counterValue;
};

btnDecrement.addEventListener("click", rest);
btnIncrement.addEventListener("click", sum);
