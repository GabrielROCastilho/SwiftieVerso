var quizModel = require("../models/quizModel");

function buscar(_, res) {
    quizModel.buscar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                const IdQuiz = resultado.map(registro => registro.IdQuiz)
                const Titulo = resultado.map(registro => registro.Titulo);
                const Descricao = resultado.map(registro => registro.Descricao);
                const NivelDificuldade = resultado.map(registro => registro.NivelDificuldade);

                res.json({
                    id: IdQuiz,
                    titulo: Titulo,
                    descricao: Descricao,
                    nivelDificuldade: NivelDificuldade
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

function buscarNumeroDePerguntas(req, res) {

    var idQuiz = req.body.idQuizServer;

    usuarioModel.buscarDados(idQuiz)
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

module.exports = {
    buscar,
    buscarNumeroDePerguntas
};