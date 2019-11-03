const mongoose = require('mongoose');
const Filme = require('../models/Filme');
const asyncHandler = require('../middleware/async');

// get all movies -- GET /filmes
exports.getMovies = async (req, res, next) => {
  try {
    const filmes = await Filme.find();

    res.status(200).render('index', { filmes });
  } catch (err) {
    res.status(400).render('error', { error: err });
  }
};

// get a single movie -- GET /filmes/:id
exports.getMovie = async (req, res, next) => {
  try {
    const filme = await Filme.findById(req.params.id);
    res.status(200).render('filme', { filme });

    if (!filme) {
      res.status(404).render('error', { error: err });
    }
  } catch (err) {
    res.status(404).render('error', { error: err });
  }
};

// get add page -- GET /filmes/add
exports.getAdd = async (req, res, next) => {
  res.render('add');
};

//create new movie -- POST /filmes
exports.createMovie = async (req, res, next) => {
  try {
    const filme = await Filme.create(req.body); // se houver um campo que nao esteja no model não é colocado na DB pq é assim que funciona e garante uma certa segurança
    res.redirect('filmes/' + filme._id);
  } catch (err) {
    res.status(404).render('error', { error: err });
  }
};
