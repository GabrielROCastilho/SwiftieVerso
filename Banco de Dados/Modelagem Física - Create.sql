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
  nivel_dificuldade INT      NOT NULL,
  numero_questoes   INT      NOT NULL,
  descricao         VARCHAR(200) NOT NULL,
  CONSTRAINT chk_nivel_dificuldade CHECK (nivel_dificuldade BETWEEN 1 AND 5)
);

-- Criando a tabela "Pergunta"
CREATE TABLE pergunta (
  idPergunta        INT PRIMARY KEY AUTO_INCREMENT,
  pergunta          VARCHAR(300),
  nivel_dificuldade INT,
  fkQuiz            INT,
  CONSTRAINT fk_quiz_pergunta FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz)
);

-- Criando a tabela "Alternativa"
CREATE TABLE alternativa (
  idAlternativa INT PRIMARY KEY AUTO_INCREMENT,
  letra         CHAR(1),
  texto         VARCHAR(200),
  fkPergunta    INT,
  CONSTRAINT fk_pergunta_alternativa FOREIGN KEY (fkPergunta) REFERENCES pergunta(idPergunta)
);

-- Criando a tabela "Desempenho"
CREATE TABLE desempenho (
  idDesempenho INT PRIMARY KEY AUTO_INCREMENT,
  fkUsuario    INT,
  fkQuiz       INT,
  pontuacao    INT NOT NULL,
  CONSTRAINT fk_usuario_desempenho FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
  CONSTRAINT fk_quiz_desempenho      FOREIGN KEY (fkQuiz)    REFERENCES quiz(idQuiz),
  CONSTRAINT chk_pontuacao           CHECK (pontuacao BETWEEN 0 AND 10)
);

-- Criando a tabela "Resposta"
CREATE TABLE resposta (
  idResposta    INT    PRIMARY KEY AUTO_INCREMENT,
  resposta      CHAR(1),
  correta       TINYINT,
  fkDesempenho  INT,
  fkPergunta    INT,
  fkAlternativa INT,
  CONSTRAINT fk_desempenho_resposta    FOREIGN KEY (fkDesempenho) REFERENCES desempenho(idDesempenho),
  CONSTRAINT fk_pergunta_resposta      FOREIGN KEY (fkPergunta)    REFERENCES pergunta(idPergunta),
  CONSTRAINT fk_alternativa_resposta   FOREIGN KEY (fkAlternativa) REFERENCES alternativa(idAlternativa)
);

-- Criando a tabela "Álbum Personalizado"
create table album_personalizado(
	idAlbum int primary key auto_increment,
    nome varchar(50) not null,
    qtd_musica int not null,
    duracao_album decimal(5,2) not null,
    fkUsuario int,
    constraint fk_usuario_album foreign key(fkUsuario) references usuario(idUsuario)
);

-- Criando a tabela "Composição"
create table composicao(
	fkAlbumPersonalizado int,
    fkMusica int,
    constraint fk_album_personalizado foreign key(fkAlbumPersonalizado) references album_personalizado(idAlbum),
    constraint fk_musica foreign key(fkMusica) references musica(idMusica),
    primary key(fkAlbumPersonalizado, fkMusica)
);




