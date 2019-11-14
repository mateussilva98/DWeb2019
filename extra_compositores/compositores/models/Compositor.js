const mongoose = require('mongoose');

var compositorSchema = new mongoose.Schema({
  nome: String,
  bio: String,
  dataNasc: Date,
  dataObito: Date,
  periodo: String,
  _id: String
});

module.exports = mongoose.model('compositores', compositorSchema);
