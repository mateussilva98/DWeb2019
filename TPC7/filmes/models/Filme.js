const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  cast: [String],
  genres: [String]
});

module.exports = mongoose.model('filmes', FilmeSchema);
