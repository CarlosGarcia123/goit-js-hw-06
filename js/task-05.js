const input = document.querySelector("#name-input");
const log = document.querySelector("#name-output");

input.addEventListener("input", updateValue);

function updateValue(e) {
  if (input.value.length == 0) {
    log.textContent = "Anonymous";
  } else {
    log.textContent = e.target.value;
  }
}
