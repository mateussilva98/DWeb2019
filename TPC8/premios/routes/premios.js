var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET páfina lista de alunos. */
router.get(['/', '/premios'], function(req, res, next) {
  axios
    .get('http://localhost:5050/api/premios/')
    .then(dados => res.render('lista-premios', { premios: dados.data }))
    .catch(err => {
      res.status(400).render('error', { error: err });
    });
});

/* GET da página de um filme */
router.get('/premios/:id', function(req, res, next) {
  axios
    .get('http://localhost:5050/api/premios/' + req.params.id)
    .then(premio => res.render('premio-individual', { p: premio.data }))
    .catch(err => {
      res.status(400).render('error', { error: err });
    });
});

module.exports = router;
