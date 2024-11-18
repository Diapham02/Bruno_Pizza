const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  toppings: [{
    type: String,
  }],
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
    default: 'medium',
  },
  isVegetarian: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('Pizza', pizzaSchema);