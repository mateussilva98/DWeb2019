var express = require('express');
var router = express.Router();

/* GET pagina inicial */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
