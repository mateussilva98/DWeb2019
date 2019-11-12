var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET página lista de alunos. */
router.get('/', function(req, res, next) {
  if (req.query.categoria != undefined && req.query.year == undefined) {
    axios
      .get('http://localhost:5050/api/premios?categoria=' + req.query.categoria)
      .then(dados => res.render('lista-premios', { premios: dados.data }))
      .catch(err => {
        res.status(400).render('error', { error: err });
      });
  } else if (req.query.categoria != undefined && req.query.year != undefined) {
    axios
      .get(
        'http://localhost:5050/api/premios?categoria=' +
          req.query.categoria +
          '&year=' +
          req.query.year
      )
      .then(dados => res.render('lista-premios', { premios: dados.data }))
      .catch(err => {
        res.status(400).render('error', { error: err });
      });
  } else {
    axios
      .get('http://localhost:5050/api/premios/')
      .then(dados => res.render('lista-premios', { premios: dados.data }))
      .catch(err => {
        res.status(400).render('error', { error: err });
      });
  }
});

/* GET pagina com as diferentes categorias. */
router.get('/categorias', function(req, res, next) {
  axios
    .get('http://localhost:5050/api/categorias')
    .then(dados => {
      res.render('categorias', { lista: dados.data });
    })
    .catch(erro => {
      res.render('error', { error: erro });
    });
});

/* GET pagina com os diferentes laureados. */
router.get('/laureados', function(req, res, next) {
  axios
    .get('http://localhost:5050/api/laureados')
    .then(dados => {
      res.render('laureados', { lista: dados.data });
    })
    .catch(erro => {
      res.render('error', { error: erro });
    });
});

/* GET da página de um filme */
router.get('/:id', function(req, res, next) {
  axios
    .get('http://localhost:5050/api/premios/' + req.params.id)
    .then(premio => res.render('premio-individual', { p: premio.data }))
    .catch(err => {
      res.status(400).render('error', { error: err });
    });
});

module.exports = router;
