-- Criando e usando o database "SwiftieVerso"
create database swiftie_verso;
use swiftie_verso;

-- Criando a tabela "Estado"
create table estado(
	idEstado int primary key auto_increment,
    nome varchar(45) not null,
    sigla char(2) not null
);

-- Criando a tabela "Cidade"
create table cidade(
	idCidade int primary key auto_increment,
    nome varchar(50) not null,
    fkEstado int not null,
    constraint fk_estado_cidade foreign key(fkEstado) references estado(idEstado)
);

-- Criando a tabela "Endereço"
create table endereco(
	idEndereco int primary key auto_increment,
    numero int not null,
    complemento varchar(50),
    logradouro varchar(200),
    fkCidade int,
    fkEstado int,
    constraint fk_cidade_endereco foreign key(fkCidade) references cidade(idCidade),
    constraint fk_estado_endereco foreign key(fkEstado) references estado(idEstado)
);

-- Criando a tabela "Usuário"
create table usuario(
	idUsuario int primary key auto_increment,
    primeiro_nome varchar(20) not null,
    sobrenome varchar(20) not null,
    cpf char(11) not null,
    email varchar(100) not null,
    pontuacao_total int,
    fkEndereco int,
    constraint fk_endereco foreign key(fkEndereco) references endereco(idEndereco)
);

-- Criando a tabela "Quiz"
create table quiz(
	idQuiz int primary key auto_increment,
    nivel_dificuldade int not null,
    numero_questoes int not null,
    descricao varchar(200) not null,
    constraint chk_nivel_dificuldade check(nivel_dificuldade between 1 and 5)
);

-- Criando a tabela "Desempenho"
create table desempenho(
	fkUsuario int,
    fkQuiz int,
    pontucao int not null,
    primary key(fkUsuario, fkQuiz),
    constraint fk_usuario_desempenho foreign key(fkUsuario) references usuario(idUsuario),
	constraint fk_quiz foreign key(fkQuiz) references quiz(idQuiz),
	constraint chk_pontuacao check(pontucao between 0 and 10)
);

-- Criando a tabela "Álbum Personalizado"
create table album_personalizado(
	idAlbum int primary key auto_increment,
    nome varchar(50) not null,
    qtd_musica int not null,
    duracao decimal(5,2) not null,
    fkUsuario int,
    constraint fk_usuario_album foreign key(fkUsuario) references usuario(idUsuario)
);

-- Criando a tabela "Música"
create table musica(
	idMusica int primary key auto_increment,
    nome varchar(100) not null,
    duracao decimal(5,2) not null
);

-- Criando a tabela "Composição"
create table composicao(
	fkAlbumPersonalizado int,
    fkMusica int,
    constraint fk_album_personalizado foreign key(fkAlbumPersonalizado) references album_personalizado(idAlbum),
    constraint fk_musica foreign key(fkMusica) references musica(idMusica),
    primary key(fkAlbumPersonalizado, fkMusica)
);




