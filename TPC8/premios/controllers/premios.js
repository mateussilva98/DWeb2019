var Premio = require('../models/Premio');
var ObjectId = require('mongodb').ObjectID;

// Devolve a lista de prémios apenas com os campos "year" e "category";
/*module.exports.listarPremios = () => {
  return Premio.find({}, { _id: 0, year: 1, category: 1 })
    .sort({ year: 'desc', category: 'asc' })
    .exec();
};*/
module.exports.listarPremios = () => {
  return Premio.aggregate([
    { $project: { year: true, category: true } },
    { $sort: { year: -1, category: 1 } }
  ]).exec();
};

// Devolve a informação completa de um prémio;
module.exports.premioID = id => {
  return Premio.findOne(ObjectId(id)).exec();
};

// Devolve a lista de categorias, sem repetições;
module.exports.listarCategorias = () => {
  return Premio.distinct('category').exec();
};

// Devolve a lista de prémios que tenham o campo "category" com o valor "YYY";
module.exports.listarPremiosCategoria = cat => {
  return Premio.find({ category: cat }).exec();
};

// Devolve a lista de prémios que tenham o campo "category" com o valor "YYY" e o campo "year" com um valor superior a "AAAA";
module.exports.premiosCategoriaData = (cat, ano) => {
  return Premio.find({ category: cat, year: { $gt: ano } }).exec();
};

// Devolve uma lista ordenada alfabeticamente por nome dos laureados com os campos correspondentes ao nome, ano do prémio e categoria.
module.exports.laureados = () => {
  return Premio.aggregate([
    { $unwind: '$laureates' },
    {
      $project: {
        name: { $concat: ['$laureates.firstname', ' ', '$laureates.surname'] },
        premio: { year: '$year', category: '$category' }
      }
    },
    { $group: { _id: '$name', premios: { $push: '$premio' } } },
    { $sort: { name: 1 } } //nao esta a funcionar o sort
  ]).exec();
};
