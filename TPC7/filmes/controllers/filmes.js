const mongoose = require('mongoose');
const Filme = require('../models/Filme');

// listar os filmes, coloquei limite para nao ser tao pesado a carregar
module.exports.listarFilmes = () => {
  return Filme.find()
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

/*
// get all movies -- GET /filmes
exports.getMovies = async (req, res, next) => {
  try {
    const filmes = await Filme.find().limit(25);

    res.status(200).render('filmes', { filmes });
  } catch (err) {
    res.status(400).render('error', { error: err });
  }
};

// get add page -- GET /filmes/add
exports.getAdd = async (req, res, next) => {
  try {
    res.status(200).render('add');
  } catch (err) {
    res.status(400).render('error', { error: err });
  }
};

// get update page -- GET /filmes/update/:id
exports.getUpdate = async (req, res, next) => {
  try {
    const filme = await Filme.findById(req.params.id);
    res.status(200).render('update', { filme });

    if (!filme) {
      return res.status(404).render('error', { error: err });
    }
  } catch (err) {
    res.status(404).render('error', { error: err });
  }
};

// get a single movie -- GET /filmes/:id
exports.getMovie = async (req, res, next) => {
  try {
    const filme = await Filme.findById(req.params.id);
    res.status(200).render('filme', { filme });

    if (!filme) {
      return res.status(404).render('error', { error: err });
    }
  } catch (err) {
    res.status(404).render('error', { error: err });
  }
};

//create new movie -- POST /filmes
exports.createMovie = async (req, res, next) => {
  try {
    const filme = await Filme.create(req.body); // se houver um campo que nao esteja no model não é colocado na DB pq é assim que funciona e garante uma certa segurança
    res.status(200).redirect('/filmes/' + filme._id);
  } catch (err) {
    res.status(404).render('error', { error: err });
  }
};

// update bootcamp -- PUT /filmes/:id

exports.updateMovie = async (req, res, next) => {
  try {
    const filme = await Filme.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!filme) {
      return res.status(404).render('error', { error: err });
    }
    res.status(200).redirect('/' + filme._id);
  } catch (err) {
    res.status(400).render('error', { error: err });
  }
};

//get update page -- GET /filmes/update

exports.getUpdate = async (req, res, next) => {
  try {
    return await res.status(200).render('update');
  } catch (err) {
    res.status(400).render('error', { error: err });
  }
};

//delete bootcamp -- DELETE /filmes/:id
exports.deleteMovie = async (req, res, next) => {
  try {
    const filme = await Filme.findOneAndDelete(req.params.id);

    if (!filme) {
      return res.status(400).render('error', { error: err });
    }

    res.status(200).redirect('/');
  } catch (err) {
    res.status(400).render('error', { error: err });
  }
};

*/
