var mysql = require("mysql2");

var mySqlConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    multipleStatements: true
};

function executar(instrucao) {
    if (process.env.AMBIENTE_PROCESSO !== "producao" && process.env.AMBIENTE_PROCESSO !== "desenvolvimento") {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM .env OU dev.env OU app.js\n");
        return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
    }

    return new Promise(function (resolve, reject) {
        let conexao; // Declara a variável fora do try para ser acessível no finally
        try {
            conexao = mysql.createConnection(mySqlConfig);

            // Adiciona um listener de erro mais robusto para a conexão
            conexao.on('error', function (err) {
                console.error("ERRO NA CONEXÃO OU EXECUÇÃO MySQL: ", err.sqlMessage || err.message);
                // Se a Promise ainda não foi rejeitada/resolvida, rejeita aqui.
                // Isso evita o erro de "unhandled promise rejection" e garante que a Promise seja tratada.
                if (err.fatal) { // Erro fatal de conexão deve ser rejeitado
                    if (conexao) {
                        conexao.end(); // Fecha a conexão se for um erro fatal
                    }
                    return reject(err);
                }
            });

            conexao.connect(function(err) {
                if (err) {
                    console.error("Erro ao conectar ao banco de dados:", err.sqlMessage || err.message);
                    if (conexao) conexao.end(); // Fecha a conexão se a conexão falhar
                    return reject(err); // Rejeita a Promise se a conexão falhar
                }

                conexao.query(instrucao, function (erro, resultados) {
                    if (erro) {
                        console.error("Erro na consulta SQL:", erro.sqlMessage || erro.message);
                        return reject(erro); // Rejeita a Promise se a consulta falhar
                    }
                    console.log(resultados);
                    resolve(resultados); // Resolve a Promise com os resultados
                });
            });

        } catch (e) {
            // Captura erros síncronos na criação da conexão, etc.
            console.error("Erro inesperado na função executar:", e.message);
            reject(e);
        } finally {
            // Garante que a conexão seja fechada APÓS a Promise ser resolvida ou rejeitada.
            // É mais seguro fechar a conexão no callback da query ou quando a Promise for tratada.
            // Movendo o conexao.end() para dentro dos callbacks de sucesso/erro da query/conexão.
            // Ou usando mysql2/promise, onde o pool gerencia isso.
        }
    });
}

module.exports = {
    executar
};