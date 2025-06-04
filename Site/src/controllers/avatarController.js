var avatarModel = require("../models/avatarModel");

function buscar(_, res){
    avatarModel.buscar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                const nome = resultado.map(registro => registro.Nome);
                const id = resultado.map(registro => registro.IdAvatar);

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