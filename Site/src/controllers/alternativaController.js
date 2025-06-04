var alternativaModel = require("../models/alternativaModel");

function buscar(req, res){
    var idPergunta = req.body.idPerguntaServer;

    alternativaModel.buscar(idPergunta)
        .then(function (resultado) {
            if (resultado.length > 0) {
                const Id = resultado.map(registro => registro.Id);
                const Letra = resultado.map(registro => registro.Letra);
                const Texto = resultado.map(registro => registro.Texto);

                res.json({
                    id: Id,
                    letra: Letra,
                    texto: Texto
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