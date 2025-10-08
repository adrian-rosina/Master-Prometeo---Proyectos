const image = document.querySelector('.random-image');


const randomId = Math.floor(Math.random() * 151) + 1;


const API_URL = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

fetch(API_URL)
  .then(response => response.json())
  .then(pokemon => {
    image.src = pokemon.sprites.other['official-artwork'].front_default;
    image.alt = pokemon.name;
  })
  .catch(error => console.error('Error al obtener el Pokémon:', error));