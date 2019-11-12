var Obra = require('../models/Obra');

// Devolve a lista de obras apenas com os campos "nome" e "anoCriacao";
module.exports.listarObras = () => {
  return Obra.find({}, { _id: 0, nome: 1, anoCriacao: 1 })
    .sort({ anoCriacao: 'desc', nome: 'asc' })
    .exec();
};

// Devolve a informação completa de uma obra;
module.exports.obraId = id => {
  return Obra.find({ _id: id }).exec();
};

// Devolve as obras em que o anoCriacao é igual ao argumento passado
module.exports.obrasAno = ano => {
  return Obra.find({ anoCriacao: ano });
};

// Devolve a lista de obras que seham do periodo passado como argumento
module.exports.obrasPeriodo = per => {
  return Obra.find({ periodo: per }).exec();
};

// Devolve a lista de prémios que tenham o campo "category" com o valor "YYY" e o campo "year" com um valor superior a "AAAA";
module.exports.obrasCompDur = (comp, dur) => {
  return Obra.find({ compositor: comp, duracao: { $gt: dur } }).exec();
};

// Devolve a lista de compositores distintos
module.exports.compositores = () => {
  return Obra.distinct('compositor').exec();
};

// Devolve a lista de periodos distintos
module.exports.periodos = () => {
  return Obra.distinct('periodo').exec();
};
