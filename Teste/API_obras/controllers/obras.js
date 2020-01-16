var Obra = require('../models/Obra');

// Devolve a lista de obras musicais apenas com os campos "id", "titulo", "tipo" e "compositor";
module.exports.listarObras = () => {
    return Obra.find({}, {
            _id: 0,
            titulo: 1,
            tipo: 1,
            compositor: 1
        })
        .sort({
            titulo: 'asc'
        })
        .exec();
}

// Devolve a informação completa de uma obra;
module.exports.consultarObra = oid => {
    return Obra
        .findOne({
            _id: oid
        })
        .exec()
}

// Devolve a lista de tipos, sem repetições;
module.exports.listarTipos = () => {
    return Obra.distinct('tipo').exec();
};

// Devolve a lista de obras que tenham o campo "compositor" com o valor "XXX";
module.exports.listarObrasCompositor = comp => {
    return Obra.find({
        compositor: comp
    }).exec();
};


// Devolve a lista de obras que tenham uma ou mais partituras para o instrumento III;
module.exports.listarObrasInstrumento = inst => {
    return Obra
        .aggregate([{
            $unwind: "$instrumentos"
        }, {
            $match: {
                'instrumentos.instrumento.designacao': inst
            }
        }])
        .exec();
}

// Devolve uma lista de obras musicais com os seguintes campos: id, titulo, partituras (número de partituras disponíveis);
module.exports.listarObrasQuant = inst => {
    return Obra.aggregate(
        [{
            $project: {
                "instrumentos.count": {
                    $size: '$instrumentos'
                }
            }
        }])
}