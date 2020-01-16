var express = require('express');
var router = express.Router();
var Obras = require('../controllers/obras');

/*
    Pedidos GET
*/

// GET /api/obras - Devolve a lista de obras musicais apenas com os campos "id", "titulo", "tipo" e "compositor";
// GET /api/obras?compositor=XXX - Devolve a lista de obras que tenham o campo "compositor" com o valor "XXX";
// GET /api/obras?instrumento=III - Devolve a lista de obras que tenham uma ou mais partituras para o instrumento III;
router.get('/obras', function (req, res, next) {
  if (req.query.instrumento != undefined) {
    Obras.listarObrasInstrumento(req.query.instrumento).then(dados => res.jsonp(dados)).catch(erro => res.status(500).jsonp(erro));
  } else if (req.query.compositor != undefined) {
    Obras.listarObrasCompositor(req.query.compositor).then(dados => res.jsonp(dados)).catch(erro => res.status(500).jsonp(erro));
  } else {
    Obras.listarObras().then(dados => res.jsonp(dados)).catch(erro => res.status(500).jsonp(erro));
  }
});

// GET /api/obras/:id - Devolve a informação completa de uma obra;
router.get('/obras/:id', function (req, res, next) {
  Obras.consultarObra(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

// GET /api/tipos - Devolve a lista de tipos, sem repetições;
router.get('/tipos', function (req, res, next) {
  Obras.listarTipos()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});


// GET /api/obrasQuant - Devolve uma lista de obras musicais com os seguintes campos: id, titulo, partituras (número de partituras disponíveis);
router.get('/obrasQuant', function (req, res, next) {
  Obras.listarObrasQuant()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});


module.exports = router;