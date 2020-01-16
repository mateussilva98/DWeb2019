var express = require('express');
const axios = require('axios');

var router = express.Router();

router.get('/entidades', function (req, res, next) {
  axios
    .get(
      'http://clav-api.dglab.gov.pt/api/entidades?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
    .then(result => {
      console.log(result.data.length);
      res.render('index', {
        lista: result.data
      });
    })
    .catch(err => {
      res.render('error', {
        erro: err
      });
    });
});

router.get('/entidades/:id', function (req, res, next) {
  let one = `http://clav-api.dglab.gov.pt/api/entidades/${req.params.id}?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ`;
  let two = `http://clav-api.dglab.gov.pt/api/entidades/${req.params.id}/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ`;
  let three = `http://clav-api.dglab.gov.pt/api/entidades/${req.params.id}/intervencao/dono?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ`;
  let four = `http://clav-api.dglab.gov.pt/api/entidades/${req.params.id}/intervencao/participante?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ`;

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
      res.render('error', {
        erro: errors
      });
    });
});


router.get('/tipologias/:id', function (req, res, next) {
  let one = `http://clav-api.dglab.gov.pt/api/tipologias/${req.params.id}?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ`;
  let two = `http://clav-api.dglab.gov.pt/api/tipologias/${req.params.id}/elementos?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ`;
  let three = `http://clav-api.dglab.gov.pt/api/tipologias/${req.params.id}/intervencao/dono?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ`;
  let four = `http://clav-api.dglab.gov.pt/api/tipologias/${req.params.id}/intervencao/participante?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ`;

  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);
  const requestThree = axios.get(three);
  const requestFour = axios.get(four);

  axios
    .all([requestOne, requestTwo, requestThree, requestFour])
    .then(
      axios.spread((...responses) => {
        const infoTipologia = responses[0].data;
        const entidades = responses[1].data;
        const dono = responses[2].data;
        const participante = responses[3].data;

        res.render('tipologia', {
          infoTipologia: infoTipologia,
          entidades: entidades,
          dono: dono,
          participante: participante
        });
      })
    )
    .catch(errors => {
      res.render('error', {
        erro: errors
      });
    });
});



router.get('/processo/:id', function (req, res, next) {
  axios
    .get(
      `http://clav-api.dglab.gov.pt/api/classes/${req.params.id}?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ`)
    .then(result => {
      //console.log(result.data.length);
      res.render('processo', {
        processo: result.data
      });
    })
    .catch(err => {
      res.render('error', {
        erro: err
      });
    });
});

router.get('/legislacao/:id', function (req, res, next) {
  axios
    .get(
      `http://clav-api.dglab.gov.pt/api/legislacao/${req.params.id}?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ`)
    .then(result => {
      //console.log(result.data.length);
      res.render('legislacao', {
        legislacao: result.data
      });
    })
    .catch(err => {
      res.render('error', {
        erro: err
      });
    });
});


module.exports = router;