const mongoose = require('mongoose');
const Filme = require('../models/Filme');

// listar os filmes, coloquei limite para nao ser tao pesado a carregar
module.exports.listarFilmes = () => {
  return Filme.find()
    .sort({ title: 1 })
    .sort({ title: 1 })
    .limit(25)
    .exec();
};

//retorna o filme com o id passado como argumento
module.exports.consultarFilme = id => {
  return Filme.findOne({ _id: id }).exec();
};

//inserir filme passado como argumento
module.exports.inserirFilme = filme => {
  return Filme.create(filme);
};

//eliminar filme passado como argumento
module.exports.eliminarFilme = id => {
  return Filme.deleteOne({ _id: id });
};

//atualizar o filme com o id passado como argumento e com o novo filme tmb passado como argumento
module.exports.atualizarFilme = (id, filme) => {
  return Filme.updateOne({ _id: id }, filme);
};
