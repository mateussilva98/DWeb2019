var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var fs = require('fs');

var myBD = __dirname + "/../arq-son-EVO.json"

/*
    Pedidos GET
*/

/* GET home page */
router.get('/', function(req, res, next) {
  jsonfile.readFile(myBD, (err, musicas) => {
    if(!err){
      res.render('index',{lista:musicas})
    }
    else{
      res.render('error', { e: "Erro a ler a base de dados" })
    }
    res.end()
})
});

/* GET da página de um elemento */
router.get('/a/:id', function (req, res, next) {
  var musica = req.params.id 
  jsonfile.readFile(myBD, (err, musicas) => {
    if (!err) {
        var index = musicas.findIndex(a => a.tit == musica)
        if(index != -1){
            var musica_temp = musicas[index];
            res.render("arquivo_singular", { a: musica_temp })}
        else
          res.render('error', { e: "Arquivo inexistente!" })
    } else {
        res.render('error', { e: err })
    }
})
})

/* GET da página para adição de elementos */
router.get('/add', function (req, res, next) {
  res.render('add')
})

/* GET da página de atualização de um elemento */
router.get('/update/:id', function (req, res, next) {
  var musica = req.params.id
  jsonfile.readFile(myBD, (err, musicas) => {
      if (!err) {
        var index = musicas.findIndex(a => a.tit == musica)
        if(index != -1){
            var musica_temp = musicas[index];
            res.render("update", { a: musica_temp})}
          else
            res.render('error', { e: "Arquivo inexistente!" })
      } else {
        res.render('error', { e: err })
      }
  })
})

/*
    Pedidos POST
*/

/* POST para adição de um novo arquivo sonoro */
router.post("/arq/novo", function (req, res, next) {
  jsonfile.readFile(myBD, (err, musicas) => {
      if (!err) {
          musicas.push(req.body)
          jsonfile.writeFile(myBD, musicas, err => {
              if (!err) {
                  console.log("Elemento gravado")
                  res.redirect("/a/" + req.body.tit)
              } else {
                  console.log(err)
                  res.render('error', { e: "Erro a adicionar arquivo sonoro" })
              }
          })
      } else {
          res.render('error', { e: "Erro a ler a base de dados" })
      }
  })
})

/*
    Pedidos DELETE
*/

/* DELETE de um elemento */
router.delete("/del/:id", function (req, res, next) {
  var musica = req.params.id 
  jsonfile.readFile(myBD, (err, musicas) => {
      if (!err) {
          const idx = musicas.findIndex(a => a.tit == musica)
          if (idx > -1) {
              musicas.splice(idx, 1)
              jsonfile.writeFile(myBD, musicas, err => {
                  if (!err) {
                      console.log("Elemento eliminado com sucesso...")
                  } else {
                      console.log(err)
                      res.render('error', { e: "Erro ao guardar na base de dados" })
                  }
              })
          } else{
            res.render('error', { e: "Elemento a eliminar não existe" })
          }
              
      } else {
          console.log(err)
          res.render('error', { e: "Erro a eliminar elemento" })
      }
  })
})


/*
    Pedidos PUT
*/

/* PUT de um elemento atualizado */
router.put("/up/:id", function (req, res, next) {
  var musica = req.params.id 
  //console.log('atualização de...'+ musica )
  jsonfile.readFile(myBD, (err, musicas) => {
      if (!err) {
          const idx = musicas.findIndex(a => a.tit)
          if (idx != -1) {
            //console.log(musicas[idx])
              
              musicas[idx] = req.body
              //console.log(musicas[idx])
              jsonfile.writeFile(myBD, musicas, err => {
                  if (!err) {
                      console.log("Elemento atualizado com sucesso...")
                  } else {
                      console.log(err)
                      res.render('error', { e: "Erro ao escrever no ficheiro" })
                  }
              })
          } else
          res.render('error', { e: "Elemento a atualizar não existe" })
      } else {
          
        res.render('error', { e: "Erro na abertura da base de dados" })
      }
  })
})



module.exports = router;
