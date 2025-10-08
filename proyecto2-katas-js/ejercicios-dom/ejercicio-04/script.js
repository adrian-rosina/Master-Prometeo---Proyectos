// 1.1 Evento click en el botón
const btn = document.getElementById("btnToClick");
btn.addEventListener("click", (event) => {
  console.log("Información del evento:", event);
});

// 1.2 Evento focus en el input con clase .focus
const inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus", (event) => {
  console.log("Valor en focus:", event.target.value);
});

// 1.3 Evento input en el input con clase .value
const inputValue = document.querySelector(".value");
inputValue.addEventListener("input", (event) => {
  console.log("Valor actual:", event.target.value);
});