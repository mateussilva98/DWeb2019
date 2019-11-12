const mongoose = require('mongoose');

var obraSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  desc: String,
  anoCriacao: String,
  periodo: String,
  compositor: String,
  duracao: String
});

module.exports = mongoose.model('Obra', obraSchema);
