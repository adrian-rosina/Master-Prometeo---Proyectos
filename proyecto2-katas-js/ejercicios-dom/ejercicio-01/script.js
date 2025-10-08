// 1.1 Seleccionar el botón con clase .showme
const button = document.querySelector(".showme");
console.log(button);

// 1.2 Seleccionar el h1 con id #pillado
const h1 = document.querySelector("#pillado");
console.log(h1);

// 1.3 Seleccionar todos los <p>
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// 1.4 Seleccionar todos los elementos con clase .pokemon
const pokemons = document.querySelectorAll(".pokemon");
console.log(pokemons);

// 1.5 Seleccionar todos los elementos con atributo data-function="testMe"
const testMeElements = document.querySelectorAll('[data-function="testMe"]');
console.log(testMeElements);

// 1.6 Seleccionar el 3er personaje con data-function="testMe"
const thirdCharacter = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(thirdCharacter);