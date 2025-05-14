-- Criando e usando o database "SwiftieVerso"
create database swiftie_verso;
use swiftie_verso;

-- Criando a tabela "Estado"
create table estado(
	idEstado int primary key auto_increment,
    nome varchar(45) not null,
    sigla char(2) not null
);

-- Criando a tabela "Endereço"
create table endereco(
	idEndereco int primary key auto_increment,
    fkEstado varchar(45)
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
    fkEndereco int not null,
    constraint fk_endereco foreign key(fkEndereco) references endereco(idEndereco),
    constraint unq_nickname unique(nickname)
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
    pontuacao int not null,
    primary key(fkUsuario, fkQuiz),
    constraint fk_usuario_desempenho foreign key(fkUsuario) references usuario(idUsuario),
	constraint fk_quiz foreign key(fkQuiz) references quiz(idQuiz),
	constraint chk_pontuacao check(pontuacao between 0 and 10)
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

-- Criando a tabela "Música"
create table musica(
	idMusica int primary key auto_increment,
    nome varchar(100) not null,
    duracao_musica decimal(5,2) not null
);

-- Criando a tabela "Composição"
create table composicao(
	fkAlbumPersonalizado int,
    fkMusica int,
    constraint fk_album_personalizado foreign key(fkAlbumPersonalizado) references album_personalizado(idAlbum),
    constraint fk_musica foreign key(fkMusica) references musica(idMusica),
    primary key(fkAlbumPersonalizado, fkMusica)
);




