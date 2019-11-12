var express = require('express');
const axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/entidades', function(req, res, next) {
  axios
    .get(
      'http://clav-api.dglab.gov.pt/api/entidades?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ'
    )
    .then(result => {
      res.render('index', { lista: result.data });
    })
    .catch(err => {
      res.render('erro', { erro: err });
    });
  //res.render("index", { title: "Express" });
});
router.get('/entidades/:id', function(req, res, next) {
  let one = `http://clav-api.dglab.gov.pt/api/entidades/${req.params.id}?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ`;
  let two = `http://clav-api.dglab.gov.pt/api/entidades/${req.params.id}/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ`;
  let three = `http://clav-api.dglab.gov.pt/api/entidades/${req.params.id}/intervencao/dono?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ`;
  let four = `http://clav-api.dglab.gov.pt/api/entidades/${req.params.id}/intervencao/participante?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ`;

  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);
  const requestThree = axios.get(three);
  const requestFour = axios.get(four);

  axios
    .all([requestOne, requestTwo, requestThree, requestFour])
    .then(
      axios.spread((...responses) => {
        const entidade = responses[0].data;
        const tipologias = responses[1].data;
        const dono = responses[2].data;
        const participante = responses[3].data;

        res.render('entidade', {
          entidade: entidade,
          tipologias: tipologias,
          dono: dono,
          participante: participante
        });
      })
    )
    .catch(errors => {
      res.render('erro', { erro: errors });
    });
});

module.exports = router;
