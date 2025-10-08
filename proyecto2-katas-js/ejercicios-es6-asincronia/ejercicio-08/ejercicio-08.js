const select = document.getElementById('character-list');
const image = document.querySelector('.character-image');
const API_URL = 'https://thronesapi.com/api/v2/Characters';


fetch(API_URL)
  .then(response => response.json())
  .then(characters => {
    characters.forEach(character => {
      const option = document.createElement('option');
      option.value = character.imageUrl;
      option.textContent = `${character.fullName} (${character.title || 'Sin título'})`;
      select.appendChild(option);
    });
  })
  .catch(error => console.error('Error al obtener los personajes:', error));


select.addEventListener('change', event => {
  const imageUrl = event.target.value;
  image.src = imageUrl;
});