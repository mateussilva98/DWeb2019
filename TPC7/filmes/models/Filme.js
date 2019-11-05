const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters']
  },
  year: {
    type: Number,
    required: true
  },
  cast: [String],
  genres: [String]
});

module.exports = mongoose.model('filmes', FilmeSchema);
