const express = require('express');
const { connect } = require('./utils/db');
const movieRoutes = require('./routes/movie.routes');
const cinemaRoutes = require('./routes/cinema.routes');
const { errorHandler, notFoundHandler } = require('./middlewares/error.handler');

const PORT = 3000;
const server = express();

server.use(express.json());

server.use('/', movieRoutes);
server.use('/', cinemaRoutes);

server.use(notFoundHandler);
server.use(errorHandler);

async function start() {
  try {
    await connect();
    server.listen(PORT, () => {
      console.log(`Server running in http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('No se pudo arrancar el servidor. ¿Está MongoDB en marcha? (mongodb://localhost:27017)');
    process.exit(1);
  }
}

start();
