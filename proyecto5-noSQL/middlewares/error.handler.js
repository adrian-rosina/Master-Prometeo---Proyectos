const mongoose = require('mongoose');

const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err instanceof mongoose.Error.CastError) {
    return res.status(400).json({ error: 'Id no válido' });
  }

  if (err.name === 'ValidationError') {
    const details = err.errors
      ? Object.fromEntries(
          Object.entries(err.errors).map(([k, v]) => [k, v.message])
        )
      : err.message;
    return res.status(400).json({ error: 'Error de validación', details });
  }

  return res.status(500).json({
    error: 'Error interno del servidor',
    message: err.message || 'Algo ha fallado',
  });
};

const notFoundHandler = (req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
};

module.exports = {
  errorHandler,
  notFoundHandler,
};
