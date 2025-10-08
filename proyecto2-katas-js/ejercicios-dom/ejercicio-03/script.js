// 1.1 Crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement("ul");
countries.forEach(country => {
  const li = document.createElement("li");
  li.textContent = country;
  ulCountries.appendChild(li);
});
document.body.appendChild(ulCountries);


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementToRemove = document.querySelector(".fn-remove-me");
if (elementToRemove) elementToRemove.remove();

// 1.3 Crea dinamicamente una lista ul > li de cars dentro del div con data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ulCars = document.createElement("ul");
cars.forEach(car => {
  const li = document.createElement("li");
  li.textContent = car;
  ulCars.appendChild(li);
});
document.querySelector('[data-function="printHere"]').appendChild(ulCars);

// 1.4 Crea dinamicamente en el html divs con un h4 (título) y un img (imagen).
const countriesData = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
  ];
  
  const divContainer = document.createElement("div");
  divContainer.classList.add("countries-container");
  
  countriesData.forEach(country => {
    const div = document.createElement("div");
    div.classList.add("country-card");
  
    const h4 = document.createElement("h4");
    h4.textContent = country.title;
  
    const img = document.createElement("img");
    img.src = country.imgUrl;
    img.alt = country.title;
  
    // 1.6 Botón que elimina este mismo div
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Eliminar este";
    btnDelete.addEventListener("click", () => div.remove());
  
    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(btnDelete);
    divContainer.appendChild(div);
  });
  
  document.body.appendChild(divContainer);
  
  // 1.5 Botón que elimina el último elemento de la serie de divs.
  const btnRemoveLast = document.createElement("button");
  btnRemoveLast.textContent = "Eliminar último";
  btnRemoveLast.addEventListener("click", () => {
    const cards = divContainer.querySelectorAll(".country-card");
    if (cards.length > 0) {
      cards[cards.length - 1].remove();
    }
  });
  document.body.appendChild(btnRemoveLast);