var signoModel = require("../models/signoModel");

function buscar(_, res){
    signoModel.buscar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                const nome = resultado.map(registro => registro.Nome);
                const id = resultado.map(registro => registro.IdSigno);

                res.json({
                    labels: nome,
                    data: id
                });
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscar
};