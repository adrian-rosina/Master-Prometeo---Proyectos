// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const divVacio = document.createElement("div");
document.body.appendChild(divVacio);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divConP = document.createElement("div");
const pDentro = document.createElement("p");
pDentro.textContent = "Soy un párrafo dentro de un div";
divConP.appendChild(pDentro);
document.body.appendChild(divConP);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divLoop = document.createElement("div");
for (let i = 1; i <= 6; i++) {
  const p = document.createElement("p");
  p.textContent = "Párrafo número " + i;
  divLoop.appendChild(p);
}
document.body.appendChild(divLoop);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const pDinamico = document.createElement("p");
pDinamico.textContent = "Soy dinámico!";
document.body.appendChild(pDinamico);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector("h2.fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");
apps.forEach(app => {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
});
document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
document.querySelectorAll(".fn-remove-me").forEach(el => el.remove());

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
const allDivs = document.querySelectorAll("body > div");
if (allDivs.length >= 2) {
  const pMedio = document.createElement("p");
  pMedio.textContent = "Voy en medio!";
  allDivs[0].insertAdjacentElement("afterend", pMedio);
}

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
document.querySelectorAll("div.fn-insert-here").forEach(div => {
  const pInside = document.createElement("p");
  pInside.textContent = "Voy dentro!";
  div.appendChild(pInside);
});