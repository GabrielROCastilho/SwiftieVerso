var database = require("../database/config")

function signos() {
    var instrucaoSql =
        `
    select s.nome_signo as Signo,
	count(u.idUsuario) as QtdDeUsuarios
    from signo s
    left join usuario u ON s.idSigno = u.fkSigno
    group by s.nome_signo
    order by QtdDeUsuarios desc
    limit 4;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function eras() {
    var instrucaoSql =
    `
    select e.nome_era as Era,
    count(u.fkEraFavorita) as QtdDeUsuarios
    from usuario u 
    inner join era e on u.fkEraFavorita = e.idEra
    group by e.nome_era
    order by QtdDeUsuarios desc
    limit 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function albuns() {
    var instrucaoSql =
    `
    select a.nome_album as Album,
    count(u.fkAlbumFavorito) as QtdDeUsuarios
    from usuario u 
    inner join album a on u.fkAlbumFavorito = a.idAlbum
    group by a.nome_album
    order by QtdDeUsuarios desc
    limit 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    signos,
    eras,
    albuns
};