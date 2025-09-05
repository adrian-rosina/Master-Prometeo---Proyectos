const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },
    { name: "The Matrix", durationInMinutes: 136 },
    { name: "Amélie", durationInMinutes: 110 },
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];
  const smallMovie = [];
  const mediumMovie = [];
  const largeMovie = [];


  for (let movie of movies){
    if (movie.durationInMinutes < 100){
        smallMovie.push(movie);

    }else if(movie.durationInMinutes> 100 && movie.durationInMinutes < 200){
        mediumMovie.push(movie);
    }else{
        largeMovie.push(movie);
    }
    
  }

  console.log("Las películas cortas son:", smallMovie);
  console.log("Las películas medias son:", mediumMovie);
  console.log("Las películas largas son:", largeMovie);

  



  