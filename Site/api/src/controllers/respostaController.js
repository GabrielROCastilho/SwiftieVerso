var respostaModel = require("../models/respostaModel");

function cadastrar(req, res) {
    var alternativa = req.body.alternativaSelecionadaServer;
    var fkUsuario = req.body.usuarioServer;
    var fkQuiz = req.body.fkQuizServer;

    if (alternativa == undefined) {
        res.status(400).send("A alternativa está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O fkUsuario está undefined!");
    } else if (fkQuiz == undefined) {
        res.status(400).send("O fkQuiz está undefined!");
    }

    respostaModel.cadastrar(alternativa, fkUsuario, fkQuiz)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function calcular(req, res) {
    var fkQuiz = req.body.fkQuizServer;
    var fkUsuario = req.body.fkUsuarioServer;
    
    if (fkQuiz == undefined) {
        res.status(400).send("O quiz está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O usuário está indefinida!");
    } else {
        respostaModel.calcular(fkQuiz, fkUsuario)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json(resultadoAutenticar[0]);
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = {
    cadastrar,
    calcular
}