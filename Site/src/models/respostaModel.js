var database = require("../database/config")

function cadastrar(alternativa, fkUsuario, fkQuiz) {
    var instrucaoSql = `                
        insert into resposta (fkUsuario, fkQuiz, fkAlternativa) values (${fkUsuario}, ${fkQuiz}, ${alternativa})
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function calcular(fkQuiz, fkUsuario) {
    var instrucaoSql = `
    select count(*) as Pontuacao
    from resposta r
    join alternativa a on r.fkAlternativa = a.idAlternativa
    where r.fkUsuario = ${fkUsuario}
    and r.fkQuiz = ${fkQuiz}
    and a.correta = TRUE;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    calcular
};