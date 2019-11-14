var Compositor = require('../models/Compositor');

// devolve todos os compositores
/*module.exports.listarCompositores = () => {
  return Compositor.find({}).exec();
};

*/

module.exports.listarCompositores = () => {
  return Compositor.find({}, { projection: { _id: 0, nome: 1 } });
};

// devolve os compositores que eram vivos num dado ano

// devolve compositores de um dado periodo

// devolve compositores vivos num dado ano e de um dado periodo

// devolve o compositor com o id dado

module.exports.compositorId = id => {
  return Compositor.find({ _id: id }).exec();
};
