const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const mongoose = require('mongoose');

// GET todas las películas
router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (err) {
    next(err);
  }
});

// GET película por _id
router.get('/movies/id/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Id no válido' });
    }
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ error: 'No movie found by this id' });
    }
    return res.status(200).json(movie);
  } catch (err) {
    next(err);
  }
});

// GET película(s) por título
router.get('/movies/title/:title', async (req, res, next) => {
  const { title } = req.params;
  try {
    const movieByTitle = await Movie.find({ title });
    return res.status(200).json(movieByTitle);
  } catch (err) {
    next(err);
  }
});

// GET películas por género
router.get('/movies/genre/:genre', async (req, res, next) => {
  const { genre } = req.params;
  try {
    const movieByGenre = await Movie.find({ genre });
    return res.status(200).json(movieByGenre);
  } catch (err) {
    next(err);
  }
});

// GET películas estrenadas a partir del año (>= año)
router.get('/movies/year/:year', async (req, res, next) => {
  const { year } = req.params;
  const yearNum = Number(year);
  try {
    if (Number.isNaN(yearNum)) {
      return res.status(400).json({ error: 'Año no válido' });
    }
    const movieByYear = await Movie.find({ year: { $gte: yearNum } });
    return res.status(200).json(movieByYear);
  } catch (err) {
    next(err);
  }
});

// POST crear nueva película
router.post('/movies', async (req, res, next) => {
  try {
    const newMovie = new Movie(req.body);
    const savedMovie = await newMovie.save();
    return res.status(201).json(savedMovie);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        error: 'Error de validación',
        details: err.errors ? Object.fromEntries(
          Object.entries(err.errors).map(([k, v]) => [k, v.message])
        ) : err.message,
      });
    }
    next(err);
  }
});

// PUT modificar película por _id
router.put('/movies/id/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Id no válido' });
    }
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedMovie) {
      return res.status(404).json({ error: 'No movie found by this id' });
    }
    return res.status(200).json(updatedMovie);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        error: 'Error de validación',
        details: err.errors ? Object.fromEntries(
          Object.entries(err.errors).map(([k, v]) => [k, v.message])
        ) : err.message,
      });
    }
    next(err);
  }
});

// DELETE eliminar película por _id
router.delete('/movies/id/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Id no válido' });
    }
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).json({ error: 'No movie found by this id' });
    }
    return res.status(200).json({ message: 'Película eliminada', movie: deletedMovie });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
