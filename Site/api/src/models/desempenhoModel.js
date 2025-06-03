var database = require("../database/config")

function cadastrar(pontuacao, fkUsuario, fkQuiz) {
    var instrucaoSql = `                
        insert into desempenho (pontuacao, fkUsuario, fkQuiz) values (${pontuacao}, ${fkUsuario}, ${fkQuiz})
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscar(fkUsuario, fkQuiz){
    var instrucaoSql = `                
    select d.pontuacao as NumeroAcertos, 
    count(p.pergunta) as TotalPerguntas
    from desempenho d
    inner join quiz q on d.fkQuiz = q.idQuiz
    inner join pergunta p on q.idQuiz = p.fkQuiz
    where d.fkQuiz = ${fkQuiz} and d.fkUsuario = ${fkUsuario}
    group by d.pontuacao;
`;
console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

function buscarDadosUsuario(fkQuiz, fkUsuario){
    var instrucaoSql = `                
        select count(*) as JaFez from desempenho where fkUsuario = ${fkUsuario} and fkQuiz = ${fkQuiz};
    `;
console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}


module.exports = {
    cadastrar,
    buscar,
    buscarDadosUsuario
};