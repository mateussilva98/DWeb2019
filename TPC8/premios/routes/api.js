var express = require('express');
var router = express.Router();
var Premios = require('../controllers/premios');

/*
    Pedidos GET
*/

/* GET listas de premios*/

router.get('/premios', function(req, res, next) {
  if (req.query.categoria != undefined && req.query.year == undefined) {
    //listar por categorias
    Premios.listarPremiosCategoria(req.query.categoria)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
    // listar por categorias e por ano
  } else if (req.query.categoria != undefined && req.query.year != undefined) {
    Premios.premiosCategoriaData(req.query.categoria, req.query.year)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  } else {
    // listar todos sem restrição
    Premios.listarPremios()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  }
});

/* GET premio individual */
router.get('/premios/:id', function(req, res, next) {
  Premios.premioID(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

/* GET categorias*/
router.get('/categorias', function(req, res, next) {
  Premios.listarCategorias()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

/* GET laureados*/
router.get('/laureados', function(req, res, next) {
  Premios.laureados()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

// fazer os outros pedidos se tiver tempo

module.exports = router;
