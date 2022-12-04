document.querySelector("#validation-input").addEventListener("blur", validar2);
function validar2() {
  const input = document.querySelector("#validation-input");
  if (input.checkValidity() && input.value.length == 6) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
