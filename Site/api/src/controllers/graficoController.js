var graficoModel = require("../models/graficoModel");

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

function eras(_, res){
    graficoModel.eras()
        .then(function (resultado) {
            if (resultado.length > 0) {
                const labels = resultado.map(registro => registro.Era);
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

function albuns(_, res){
    graficoModel.albuns()
        .then(function (resultado) {
            if (resultado.length > 0) {
                const labels = resultado.map(registro => registro.Album);
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
    signos,
    eras,
    albuns
};
