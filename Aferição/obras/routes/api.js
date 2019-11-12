var express = require('express');
var router = express.Router();
var Obras = require('../controllers/obras');

/*
    Pedidos GET
*/

/* GET listas de obras*/

router.get('/obras', function(req, res, next) {
  if (req.query.ano != undefined) {
    //listar por ano
    Obras.obrasAno(req.query.ano)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  }
  // listar por compositor e duracao
  else if (
    req.query.compositor != undefined &&
    req.query.duracao != undefined
  ) {
    Obras.obrasCompDur(req.query.compositor, req.query.duracao)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  }
  // Listar por duracao
  else if (req.query.periodo != undefined) {
    Obras.obrasPeriodo(req.query.periodo)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  } else {
    // listar todos sem restrição
    Obras.listarObras()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  }
});

/* GET obra individual */
router.get('/obras/:idObra', function(req, res, next) {
  Obras.obraId(req.params.idObra)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

/* GET compositores*/
router.get('/compositores', function(req, res, next) {
  Obras.compositores()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

/* GET periodos*/
router.get('/periodos', function(req, res, next) {
  Obras.periodos()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

module.exports = router;
