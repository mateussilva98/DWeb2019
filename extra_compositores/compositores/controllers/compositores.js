var Compositor = require('../models/Compositor');
var ObjectId = require('mongodb').ObjectID;

// devolve todos os compositores
module.exports.listarCompositores = () => {
  return Compositor.find({}).exec();
};

// devolve os compositores que eram vivos num dado ano
/*module.exports.compositoresVivos = ano => {
  return Compositor.find({
    dataNasc: { $lt: ano },
    dataObito: { $gt: ano }
  }).exec();
};*/

/*module.exports.compositoresVivos = ano => {
  return Compositor.aggregate(
    [ { $match : { {$year: dataObito}: {} } } ]
).exec();*/

// devolve compositores de um dado periodo
module.exports.compositoresPeriodo = per => {
  return Compositor.find({ periodo: per });
};

// devolve compositores vivos num dado ano e de um dado periodo
module.exports.compositoresVivosPeriodo = (ano, per) => {
  return Compositor.find({
    dataNasc: { $lt: ano },
    dataObito: { $gt: ano },
    periodo: per
  }).exec();
};

// devolve o compositor com o id dado
module.exports.compositorId = id => {
  // não funciona :))))
  return Compositor.find({ _id: id }).exec();
};
