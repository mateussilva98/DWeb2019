const mongoose = require('mongoose');

var partituraSchema = new mongoose.Schema({
    _voz: String,
    _type: String,
    _path: String
});

var instrumentoSchema = new mongoose.Schema({
    designacao: String,
    partitura: partituraSchema

});

var obraSchema = new mongoose.Schema({
    _id: String,
    titulo: String,
    subtitulo: String,
    arranjo: String,
    tipo: String,
    compositor: String,
    instrumentos: [instrumentoSchema]
});




module.exports = mongoose.model('obras', obraSchema);