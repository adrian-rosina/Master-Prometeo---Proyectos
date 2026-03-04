const mongoose = require('mongoose');

const urlDb = 'mongodb://localhost:27017/proyecto-basico-express-movies';

const connect = async () => {
  try {
    await mongoose.connect(urlDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conected with db succesfully');
  } catch (error) {
    console.error('Error to connect with db:', error.message);
    throw error;
  }
};

module.exports = {
  connect,
};
