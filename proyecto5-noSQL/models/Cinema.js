const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    screens: { type: Number, default: 1 },
  },
  {
    timestamps: true,
  }
);

const Cinema = mongoose.model('Cinema', cinemaSchema);
module.exports = Cinema;
