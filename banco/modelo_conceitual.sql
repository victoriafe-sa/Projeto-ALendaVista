create database Alendavista;
use Alendavista;

        CREATE TABLE Candidato (
    id_candidato INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150),
    cpf DATE,
    data_nascimento DATE,
    cota_candidato VARCHAR(20),
    email VARCHAR(100),
    endereco VARCHAR(150),
    telefone CHAR(11)
);

CREATE TABLE Processo_seletivo(
id_processo_seletivo INT AUTO_INCREMENT PRIMARY KEY,
nome_processo varchar(10)
);
 CREATE TABLE Equipe(
 id_equipe INT AUTO_INCREMENT PRIMARY KEY,
 nome_equipe varchar(50)
 );

 create table Equipe_processo(
 id_processo_seletivo INT,
 id_equipe INT,
 id_candidato int,
 foreign key (id_processo_seletivo) REFERENCES Processo_seletivo(id_processo_seletivo),
  foreign key (id_equipe) REFERENCES Equipe(id_equipe),
   foreign key ( id_candidato) REFERENCES Candidato( id_candidato),
   PRIMARY KEY (id_processo_seletivo,id_equipe,  id_candidato)
 );