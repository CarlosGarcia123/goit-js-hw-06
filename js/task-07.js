const controlSize = document.querySelector("#font-size-control");

controlSize.addEventListener("input", mostrar);

function mostrar() {
  const textSize = document.querySelector("#text");
  num = controlSize.value;
  textSize.style.fontSize = num + "px";
}
