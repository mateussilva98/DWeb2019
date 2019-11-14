var express = require('express');
var router = express.Router();
var Compositores = require('../controllers/compositores');

/*
    Pedidos GET
*/

/* GET compositores */
router.get('/compositores', function(req, res, next) {
  if (req.query.periodo != undefined && req.query.ano != undefined) {
    Compositores.compositoresVivosPeriodo(req.query.ano, req.query.periodo)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  } else if (req.query.periodo != undefined && req.query.ano == undefined) {
    Compositores.compositoresPeriodo(req.query.periodo)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  } else if (req.query.periodo == undefined && req.query.ano != undefined) {
    Compositores.compositoresVivos(req.query.ano)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  } else {
    Compositores.listarCompositores()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  }
});

/* GET compositor com id dado */
router.get('/compositores/:idComp', function(req, res, next) {
  Compositores.compositorId(req.param.idComp)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

module.exports = router;
