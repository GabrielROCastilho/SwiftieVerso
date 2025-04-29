-- Criando e usando o database "SwiftieVerso"
create database swiftie_verso;
use swiftie_verso;

-- Criando a tabela "Álbum"
create table album(
	idAlbum int primary key auto_increment,
    nome varchar(50) not null
);

-- Criando a tabela "Música"
create table musica(
	idMusica int primary key auto_increment,
    nome varchar(50) not null,
    duracao decimal(5,2) not null,
    fkAlbum int not null,
    constraint fk_album foreign key(fkAlbum) references album(idAlbum)
);

-- Criando a tabela "Quiz"
create table quiz(
	idQuiz int primary key auto_increment,
    nivel_dificuldade int not null,
    numero_questoes int not null
);

-- Criando a tabela "Usuário"
create table usuario(
	idUsuario int primary key auto_increment,
    primeiro_nome varchar(30) not null,
    sobrenome varchar(30) not null,
    email varchar(100) not null,
    pontuacao_total int,
    fkAlbum int,
    constraint fk_album foreign key(fkAlbum) references album(idAlbum)
);

-- Criando a tabela "Desempenho"
create table desempenho(
	fkUsuario int,
    fkQuiz int,
    pontucao int not null,
    primary key(fkUsuario, fkQuiz),
    constraint fk_usuario foreign key(fkUsuario) references usuario(idUsuario),
	constraint fkQuiz foreign key(fkQuiz) references quiz(idQuiz)
);

