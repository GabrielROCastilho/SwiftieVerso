var database = require("../database/config")

function estadosComAsMaioresPontuacoes(){
    var instrucaoSql = `
    select estado, pontuacao
    from sua_tabela
    order by pontuacao DESC
    limit 5;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function albunsFavoritos(){
//     var instrucaoSql = `
//     with votos_por_album_estado as (
//         select 
//             e.nome as nome_estado,
//             a.nome_album as album_favorito,
//             count(*) as qtd_votos,
//             row_number() over (
//                 PARTITION BY e.nome order by count(*) desc, a.idAlbum
//             ) as posicao
//         from usuario u
//         inner join estado e ON e.idEstado = u.fkEndereco
//         inner join album a ON u.fkAlbumFavorito = a.idAlbum
//         group by e.nome, a.nome_album, a.idAlbum
//     )
//     select 
//         nome_estado,
//         album_favorito,
//         qtd_votos
//     from votos_por_album_estado
//     where posicao = 1
//     order by nome_estado;
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

function signos(){
    var instrucaoSql = 
    `
    select s.nome_signo as Signo,
	count(u.idUsuario) as QtdDeUsuarios
    from signo s
    left join usuario u ON s.idSigno = u.fkSigno
    group by s.nome_signo
    order by QtdDeUsuarios desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    estadosComAsMaioresPontuacoes,
    // albunsFavoritos, 
    signos
};