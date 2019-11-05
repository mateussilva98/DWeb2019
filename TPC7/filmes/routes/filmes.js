const express = require('express');
const Filmes = require('../controllers/filmes');
const router = express.Router();

/*
    Pedidos GET
*/

// pagina principal com 25 filmes ---- GET /
router.get(['/'], function(req, res, next) {
  Filmes.listarFilmes(true)
    .then(filmes => res.render('filmes', { filmes }))
    .catch(err => {
      res.status(400).render('error', { error: err });
    });
});

// pagina adicionar filmes ---- GET /adicionar
router.get('/adicionar', function(req, res, next) {
  res.render('adicionar');
});

// pagina de um filme ---- GET /:id
router.get('/:id', function(req, res, next) {
  Filmes.consultarFilme(req.params.id)
    .then(filme => res.render('filme', { filme }))
    .catch(err => {
      res.status(400).render('error', { error: err });
    });
});

// pagina de atualizar um filme ---- GET /update/:id
router.get(['/update/:id', 'filmes/update/:id'], function(req, res, next) {
  Filmes.consultarFilme(req.params.id)
    .then(filme => res.render('atualizar', { filme }))
    .catch(err => {
      res.status(400).render('error', { error: err });
    });
});

/*
    Pedidos POST
*/

// adicionar novo filme ---- POST /
router.post('/', function(req, res, next) {
  const filme = {
    title: req.body.title,
    year: req.body.year
  };
  Filmes.inserirFilme(filme)
    .then(dados => {
      res.redirect('/filmes/' + dados._id);
    })
    .catch(err => {
      res.status(400).render('error', { error: err });
    });
});

/*
    Pedidos DELETE
*/

// apagar um filme ---- DELETE /:id
router.delete('/:id', function(req, res, next) {
  Filmes.eliminarFilme(req.params.id)
    .then(dados => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(400).render('error', { error: err });
    });
});

/*
    Pedidos PUT
*/

// atualizar filme ---- PUT /:id
router.put('/:id', function(req, res, next) {
  Filmes.atualizarFilme(req.params.id, req.body)
    .then(dados => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(400).render('error', { error: err });
    });
});

module.exports = router;
