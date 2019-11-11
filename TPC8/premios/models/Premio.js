const mongoose = require('mongoose');

var laureatesSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  motivation: {
    type: String,
    required: true
  },
  share: {
    type: String,
    required: true
  }
});

var premioSchema = new mongoose.Schema({
  year: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  overallMotivation: String,
  laureates: [laureatesSchema]
});

module.exports = mongoose.model('Premio', premioSchema);
