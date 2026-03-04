const express = require('express');
const router = express.Router();
const Cinema = require('../models/Cinema');
const mongoose = require('mongoose');

// GET todos los cines
router.get('/cinemas', async (req, res, next) => {
  try {
    const cinemas = await Cinema.find();
    return res.status(200).json(cinemas);
  } catch (err) {
    next(err);
  }
});

// GET cine por _id
router.get('/cinemas/id/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Id no válido' });
    }
    const cinema = await Cinema.findById(id);
    if (!cinema) {
      return res.status(404).json({ error: 'No cinema found by this id' });
    }
    return res.status(200).json(cinema);
  } catch (err) {
    next(err);
  }
});

// POST crear nuevo cine
router.post('/cinemas', async (req, res, next) => {
  try {
    const newCinema = new Cinema(req.body);
    const savedCinema = await newCinema.save();
    return res.status(201).json(savedCinema);
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

// PUT modificar cine por _id
router.put('/cinemas/id/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Id no válido' });
    }
    const updatedCinema = await Cinema.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedCinema) {
      return res.status(404).json({ error: 'No cinema found by this id' });
    }
    return res.status(200).json(updatedCinema);
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

// DELETE eliminar cine por _id
router.delete('/cinemas/id/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Id no válido' });
    }
    const deletedCinema = await Cinema.findByIdAndDelete(id);
    if (!deletedCinema) {
      return res.status(404).json({ error: 'No cinema found by this id' });
    }
    return res.status(200).json({ message: 'Cine eliminado', cinema: deletedCinema });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
