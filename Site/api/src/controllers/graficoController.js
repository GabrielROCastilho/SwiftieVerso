var graficoModel = require("../models/graficoModel");

function estadosComAsMaioresPontuacoes(_, res) {
    graficoModel.estadosComAsMaioresPontuacoes()
        .then(function (resultado) {
            if (resultado.length > 0) {
                const labels = resultado.map(registro => registro.estado);
                const valores = resultado.map(registro => registro.pontuacao);

                res.json({
                    labels: labels,
                    data: valores
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

// function albunsFavoritos(req, res){
    
// }

function signos(_, res){
    graficoModel.signos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                const labels = resultado.map(registro => registro.Signo);
                const valores = resultado.map(registro => registro.QtdDeUsuarios);

                res.json({
                    labels: labels,
                    data: valores
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
    estadosComAsMaioresPontuacoes,
    // albunsFavoritos,
    signos
};
