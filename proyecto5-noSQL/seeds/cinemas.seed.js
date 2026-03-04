const mongoose = require('mongoose');
const Cinema = require('../models/Cinema');

const cinemas = [
  { name: 'Cine Gran Vía', address: 'Gran Vía 12', city: 'Madrid', screens: 8 },
  { name: 'Cine Callao', address: 'Plaza Callao 2', city: 'Madrid', screens: 6 },
  { name: 'Cine Albéniz', address: 'Calle de la Paz 5', city: 'Málaga', screens: 4 },
];

mongoose
  .connect('mongodb://localhost:27017/proyecto-basico-express-movies')
  .then(async () => {
    const existing = await Cinema.find();
    if (existing.length) {
      await Cinema.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting cinemas: ${err}`))
  .then(async () => {
    await Cinema.insertMany(cinemas);
    console.log('Cinemas seed: DatabaseCreated');
  })
  .catch((err) => console.log(`Error creating cinemas: ${err}`))
  .finally(() => mongoose.disconnect());
