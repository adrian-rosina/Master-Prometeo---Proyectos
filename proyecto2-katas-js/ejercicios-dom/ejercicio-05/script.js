const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];
  
  const albumList = document.getElementById("album-list");
  
  albums.forEach((album, index) => {
    const li = document.createElement("li");
  
    // Imagen de portada aleatoria
    const img = document.createElement("img");
    img.src = `https://picsum.photos/200/200?random=${index + 1}`;
    img.alt = `Portada de ${album}`;
  
    // Nombre del álbum
    const title = document.createElement("h3");
    title.textContent = album;
  
    li.appendChild(img);
    li.appendChild(title);
  
    albumList.appendChild(li);
  });