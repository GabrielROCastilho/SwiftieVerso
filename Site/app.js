// var ambiente_processo = 'producao';
var ambiente_processo = 'producao';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var graficoRouter = require("./src/routes/graficos");
var avatarRouter = require("./src/routes/avatares");
var estadoRouter = require("./src/routes/estados");
var signoRouter = require("./src/routes/signos");
var albumRouter = require("./src/routes/albuns");
var musicaRouter = require("./src/routes/musicas");
var eraRouter = require("./src/routes/eras");
var quizRouter = require("./src/routes/quizzes");
var perguntaRouter = require("./src/routes/perguntas");
var respostaRouter = require("./src/routes/respostas");
var alternativaRouter = require("./src/routes/alternativas");
var desempenhoRouter = require("./src/routes/desempenhos");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/graficos", graficoRouter);
app.use("/avatares", avatarRouter);
app.use("/estados", estadoRouter);
app.use("/signos", signoRouter);
app.use("/albuns", albumRouter);
app.use("/musicas", musicaRouter);
app.use("/eras", eraRouter);
app.use("/quizzes", quizRouter);
app.use("/perguntas", perguntaRouter);
app.use("/alternativas", alternativaRouter);
app.use("/respostas", respostaRouter);
app.use("/desempenhos", desempenhoRouter);


app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});
