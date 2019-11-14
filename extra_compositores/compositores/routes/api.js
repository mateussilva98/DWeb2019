var express = require('express');
var router = express.Router();
var Compositores = require('../controllers/compositores');

/*
    Pedidos GET
*/

/* GET compositores */
router.get('/compositores', function(req, res, next) {
  Compositores.listarCompositores()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

/* GET compositor com id dado */
router.get('/compositores/:id', function(req, res, next) {
  Compositores.compositorId(req.param.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

module.exports = router;
