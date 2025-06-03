-- Criando e usando o database "SwiftieVerso"
drop database swiftie_verso;
create database swiftie_verso;
use swiftie_verso;

-- Criando a tabela "Estado"
create table estado(
	idEstado int primary key auto_increment,
    nome varchar(45) not null,
    sigla char(2) not null
);

-- Criando a tabela "Signo"
create table signo(
	idSigno int primary key auto_increment,
    nome_signo varchar(50) not null
);

-- Criando a tabela "Álbum"
create table album(
	idAlbum int primary key auto_increment,
    nome_album varchar(50) not null
);

-- Criando a tabela "Era"
create table era(
	idEra int primary key auto_increment,
    nome_era varchar(50) not null
);

-- Criando a tabela "Avatar"
create table avatar(
	idAvatar int primary key auto_increment,
    nome_avatar varchar(45) not null
);

-- Criando a tabela "Música"
create table musica(
	idMusica int primary key auto_increment,
    nome varchar(100) not null,
    duracao_musica decimal(5,2) not null
);

-- Criando a tabela "Usuário"
create table usuario(
	idUsuario int primary key auto_increment,
    primeiro_nome varchar(20) not null,
    sobrenome varchar(20) not null,
    dtNascimento date not null,
    cpf char(11) not null,
    email varchar(100) not null,
    senha varchar(15) not null,
    nickname varchar(50) not null,
    bio varchar(500),
    pontuacao_total int default 0,
    minutagem decimal(5.2) default 0,
    fkEstado int not null,
    fkSigno int,
    fkAlbumFavorito int,
    fkEraFavorita int,
    fkAvatar int,
    fkMusicaFavorita int,
    constraint fk_estado foreign key(fkEstado) references estado(idEstado),
    constraint fk_signo foreign key(fkSigno) references signo(idSigno),
    constraint fk_album_favorito foreign key(fkAlbumFavorito) references album(idAlbum),
    constraint fk_era_favorita foreign key(fkEraFavorita) references era(idEra),
    constraint fk_avatar foreign key(fkAvatar) references avatar(idAvatar),
    constraint fk_musica_favorita foreign key(fkMusicaFavorita) references musica(idMusica),
    constraint unq_nickname unique(nickname),
    constraint unq_email unique(email),
    constraint unq_cpf unique(cpf)
);

-- -- Criando a tabela "Quiz"
CREATE TABLE quiz (
  idQuiz           INT PRIMARY KEY AUTO_INCREMENT,
  titulo varchar(45) not null,
  nivel_dificuldade INT      NOT NULL,
  descricao         VARCHAR(100) NOT NULL,
  CONSTRAINT chk_nivel_dificuldade CHECK (nivel_dificuldade BETWEEN 1 AND 5)
);

-- Criando a tabela "Pergunta"
CREATE TABLE pergunta (
  idPergunta        INT PRIMARY KEY AUTO_INCREMENT,
  pergunta          VARCHAR(300),
  nivel_dificuldade int,
  fkQuiz            INT,
  CONSTRAINT fk_quiz_pergunta FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz),
  constraint chk_nive_dificuldade_pergunta check (nivel_dificuldade between 1 and 5)
);

-- Criando a tabela "Alternativa"
CREATE TABLE alternativa (
  idAlternativa INT PRIMARY KEY AUTO_INCREMENT,
  letra         CHAR(1),
  texto         VARCHAR(200),
  correta bool,
  fkPergunta    INT,
  constraint fk_pergunta_alternativa foreign key (fkPergunta) references pergunta(idPergunta)
);

-- Criando a tabela "Desempenho"
create table desempenho (
  idDesempenho int primary key auto_increment,
  pontuacao int, 
  fkUsuario    int,
  fkQuiz       int,
  constraint fk_usuario_desempenho foreign key (fkUsuario) references usuario(idUsuario),
  constraint fk_quiz_desempenho foreign key (fkQuiz) references quiz(idQuiz),
  constraint chk_pontuacao check (pontuacao between 0 and 10)
);

-- Criando a tabela "Resposta"
create table resposta (
  idResposta int primary key auto_increment,
  fkUsuario      int,
  fkQuiz       int,
  fkAlternativa  int,
  constraint fk_usuario_resposta foreign key (fkUsuario) references usuario(idUsuario),
  constraint fk_quiz_resposta foreign key (fkQuiz) references quiz(idQuiz),
  constraint fk_alternativa_resposta foreign key (fkAlternativa) references alternativa(idAlternativa)
);


