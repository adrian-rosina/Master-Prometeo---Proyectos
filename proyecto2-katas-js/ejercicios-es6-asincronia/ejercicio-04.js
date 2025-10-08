// 4.1 - Filtrar los valores mayores que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const adultAges = ages.filter(age => age > 18);

console.log(adultAges); // [22, 24, 55, 65, 21, 90]


// 4.2 - Filtrar los valores pares
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const evenAges = ages2.filter(age => age % 2 === 0);

console.log(evenAges); // [22, 14, 24, 12, 90]


// 4.3 - Filtrar streamers que jueguen a 'League of Legends'
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const lolStreamers = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');

console.log(lolStreamers);



// 4.4 - Filtrar streamers que tengan una 'u' en su nombre
const streamers2 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const streamersWithU = streamers2.filter(streamer => streamer.name.includes('u'));

console.log(streamersWithU);



// 4.5 - Filtrar streamers con 'Legends' en gameMorePlayed 
// y poner el texto en mayúsculas si su edad > 35
const streamers3 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const legendsStreamers = streamers3
  .filter(streamer => streamer.gameMorePlayed.includes('Legends'))
  .map(streamer => {
    if (streamer.age > 35) {
      return { 
        ...streamer, 
        gameMorePlayed: streamer.gameMorePlayed.toUpperCase() 
      };
    }
    return streamer;
  });

console.log(legendsStreamers);
