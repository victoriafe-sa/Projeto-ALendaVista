create DATABASE alendavista;
DROP DATABASE alendavista;
use alendavista;

CREATE TABLE Candidato (
    id_Candidato INT PRIMARY KEY,
    Nome VARCHAR(100),
    CPF CHAR(14),
    Data_Nascimento DATE,
    Endereco VARCHAR(100),
    Telefone CHAR(11),
    Email VARCHAR(100),
    Cota VARCHAR(25)
);

CREATE TABLE Processo (
    id_Processo INT PRIMARY KEY,
    Descricao VARCHAR(500),
    Andamento VARCHAR(20),
    Data_Abertura DATE,
    Data_Fechamento DATE
);

CREATE TABLE Administrador (
    id_Administrador INT PRIMARY KEY,
    Nome VARCHAR(100),
    CPF CHAR(14),
    Email VARCHAR(100),
    Data_Admissao DATE,
    Cargo VARCHAR(15),
    Departamento VARCHAR(20),
    Status_ADMIN VARCHAR(20)
);

CREATE TABLE Funcionarios (
    id_Funcionarios INT PRIMARY KEY,
    Nome VARCHAR(100),
    CPF CHAR(14),
    Email VARCHAR(100),
    Data_Admissao DATE,
    Funcao VARCHAR(15),
    Departamento VARCHAR(15),
    Status_FUNC VARCHAR(20),
    fk_Administrador_id_Administrador INT,
    fk_Equipe_id_equipe INT
);

CREATE TABLE Equipe (
    id_equipe INT PRIMARY KEY,
    nome VARCHAR(20),
    qnt_func INT(2),
    descricao VARCHAR(100)
);

CREATE TABLE Concorre (
    fk_Candidato_id_Candidato INT,
    fk_Processo_id_Processo INT
);

CREATE TABLE Gerenciado (
    fk_Processo_id_Processo INT,
    fk_Equipe_id_equipe INT
);

ALTER TABLE Funcionarios ADD CONSTRAINT FK_Funcionarios_2
    FOREIGN KEY (fk_Administrador_id_Administrador)
    REFERENCES Administrador (id_Administrador)
    ON DELETE RESTRICT;
 
ALTER TABLE Funcionarios ADD CONSTRAINT FK_Funcionarios_3
    FOREIGN KEY (fk_Equipe_id_equipe)
    REFERENCES Equipe (id_equipe)
    ON DELETE CASCADE;
 
ALTER TABLE Concorre ADD CONSTRAINT FK_Concorre_1
    FOREIGN KEY (fk_Candidato_id_Candidato)
    REFERENCES Candidato (id_Candidato)
    ON DELETE RESTRICT;
 
ALTER TABLE Concorre ADD CONSTRAINT FK_Concorre_2
    FOREIGN KEY (fk_Processo_id_Processo)
    REFERENCES Processo (id_Processo)
    ON DELETE RESTRICT;
 
ALTER TABLE Gerenciado ADD CONSTRAINT FK_Gerenciado_1
    FOREIGN KEY (fk_Processo_id_Processo)
    REFERENCES Processo (id_Processo)
    ON DELETE RESTRICT;
 
ALTER TABLE Gerenciado ADD CONSTRAINT FK_Gerenciado_2
    FOREIGN KEY (fk_Equipe_id_equipe)
    REFERENCES Equipe (id_equipe)
    ON DELETE RESTRICT;


INSERT INTO Candidato (id_Candidato, Nome, CPF, Data_Nascimento, Endereco, Telefone, Email, Cota) VALUES
  (1, 'João Silva', '12345678901', '1990-01-01', 'Rua A, 123', '11987654321', 'joao@email.com', 'Não'),
  (2, 'Maria Souza', '98765432109', '1992-05-15', 'Rua B, 456', '11987654322', 'maria@email.com', 'Sim'),
  (3, 'Pedro Santos', '12345678902', '1991-08-20', 'Rua C, 789', '11987654323', 'pedro@email.com', 'Não'),
  (4, 'Ana Oliveira', '98765432108', '1993-11-05', 'Rua D, 101', '11987654324', 'ana@email.com', 'Sim'),
  (5, 'Carlos Pereira', '12345678903', '1994-02-28', 'Rua E, 134', '11987654325', 'carlos@email.com', 'Não'),
  (6, 'Beatriz Santos', '98765432107', '1995-06-12', 'Rua F, 167', '11987654326', 'beatriz@email.com', 'Sim'),
  (7, 'Gustavo Lima', '12345678904', '1996-09-25', 'Rua G, 200', '11987654327', 'gustavo@email.com', 'Não'),
  (8, 'Helena Costa', '98765432106', '1997-12-10', 'Rua H, 233', '11987654328', 'helena@email.com', 'Sim'),
  (9, 'Rafael Ferreira', '12345678905', '1998-03-18', 'Rua I, 266', '11987654329', 'rafael@email.com', 'Não'),
  (10, 'Isabela Silva', '98765432105', '1999-07-02', 'Rua J, 299', '11987654330', 'isabela@email.com', 'Sim');
  
INSERT INTO Processo (id_Processo, Descricao, Andamento, Data_Abertura, Data_Fechamento) VALUES
  (1, 'Processo Seletivo para Estágio em Desenvolvimento', 'Em Andamento', '2024-04-01', NULL),
  (2, 'Implementação do novo sistema de gestão', 'Em Desenvolvimento', '2023-11-15', NULL),
  (3, 'Revisão anual de contratos com fornecedores', 'Concluído', '2023-12-01', '2024-01-15'),
  (4, 'Projeto de expansão da filial de São Paulo', 'Planejamento', '2024-02-10', NULL),
  (5, 'Migração para a nuvem', 'Em Andamento', '2023-09-01', NULL),
  (6, 'Auditoria interna de segurança da informação', 'Concluído', '2023-11-30', '2023-12-15'),
  (7, 'Treinamento da equipe de vendas sobre novo produto', 'Em Andamento', '2024-03-15', NULL),
  (8, 'Desenvolvimento de novo aplicativo mobile', 'Planejamento', '2024-05-01', NULL),
  (9, 'Análise de viabilidade de novo mercado', 'Em Andamento', '2023-12-20', NULL),
  (10, 'Implementação de sistema de CRM', 'Concluído', '2023-08-15', '2023-10-31');

INSERT INTO Administrador (id_Administrador, Nome, CPF, Email, Data_Admissao, Cargo, Departamento, Status_ADMIN) VALUES
  (1, 'João da Silva', '12345678901', 'joao@email.com', '2020-01-01', 'Gerente', 'TI', 'Ativo'),
  (2, 'Maria Souza', '98765432109', 'maria@email.com', '2021-05-15', 'Analista', 'Financeiro', 'Ativo'),
  (3, 'Pedro Santos', '12345678902', 'pedro@email.com', '2019-08-20', 'Supervisor', 'RH', 'Inativo'),
  (4, 'Ana Oliveira', '98765432108', 'ana@email.com', '2022-11-05', 'Coordenador', 'Marketing', 'Ativo'),
  (5, 'Carlos Pereira', '12345678903', 'carlos@email.com', '2023-02-28', 'Gerente', 'Comercial', 'Ativo'),
  (6, 'Beatriz Santos', '98765432107', 'beatriz@email.com', '2022-06-12', 'Analista', 'TI', 'Inativo'),
  (7, 'Gustavo Lima', '12345678904', 'gustavo@email.com', '2021-09-25', 'Supervisor', 'RH', 'Ativo'),
  (8, 'Helena Costa', '98765432106', 'helena@email.com', '2020-12-10', 'Coordenador', 'Marketing', 'Ativo'),
  (9, 'Rafael Ferreira', '12345678905', 'rafael@email.com', '2023-03-18', 'Gerente', 'Financeiro', 'Ativo'),
  (10, 'Isabela Silva', '98765432105', 'isabela@email.com', '2022-07-02', 'Analista', 'TI', 'Ativo');
  
INSERT INTO Funcionarios (id_Funcionarios, Nome, CPF, Email, Data_Admissao, Funcao, Departamento, Status_FUNC, fk_Administrador_id_Administrador, fk_Equipe_id_equipe) VALUES
  (1, 'João Silva', '12345678901', 'joao@empresa.com', '2023-01-01', 'Desenvolvedor', 'TI', 'Ativo', 1, 1),
  (2, 'Maria Souza', '98765432109', 'maria@empresa.com', '2023-02-15', 'Analista de Sistemas', 'TI', 'Ativo', 1, 1),
  (3, 'Pedro Santos', '12345678902', 'pedro@empresa.com', '2023-03-20', 'Gerente de Projetos', 'Gerencial', 'Ativo', 2, 2),
  (4, 'Ana Oliveira', '98765432108', 'ana@empresa.com', '2023-04-05', 'Designer Gráfico', 'Marketing', 'Ativo', 3, 3),
  (5, 'Carlos Pereira', '12345678903', 'carlos@empresa.com', '2023-05-28', 'Analista de Marketing', 'Marketing', 'Ativo', 3, 3),
  (6, 'Beatriz Santos', '98765432107', 'beatriz@empresa.com', '2023-06-12', 'Contador', 'Financeiro', 'Ativo', 4, 4),
  (7, 'Gustavo Lima', '12345678904', 'gustavo@empresa.com', '2023-07-25', 'Assistente Administrativo', 'Administrativo', 'Ativo', 4, 4),
  (8, 'Helena Costa', '98765432106', 'helena@empresa.com', '2023-08-10', 'Vendedor', 'Comercial', 'Ativo', 5, 5),
  (9, 'Rafael Ferreira', '12345678905', 'rafael@empresa.com', '2023-09-18', 'Técnico de Suporte', 'TI', 'Ativo', 1, 1),
  (10, 'Isabela Silva', '98765432105', 'isabela@empresa.com', '2023-10-02', 'Estagiário de Marketing', 'Marketing', 'Ativo', 3, 3);

INSERT INTO Equipe (id_equipe, nome, qnt_func, descricao) VALUES
  (1, 'Equipe de Desenvolvimento', 5, 'Responsável pelo desenvolvimento de software'),
  (2, 'Equipe de Marketing', 3, 'Responsável pelas estratégias de marketing'),
  (3, 'Equipe de Vendas', 4, 'Responsável pelas vendas e atendimento ao cliente'),
  (4, 'Equipe Financeira', 2, 'Responsável pelas finanças e contabilidade'),
  (5, 'Equipe de Suporte Técnico', 3, 'Responsável pelo suporte técnico aos usuários'),
  (6, 'Equipe de Recursos Humanos', 2, 'Responsável pela gestão de pessoas'),
  (7, 'Equipe Jurídica', 2, 'Responsável pelos assuntos jurídicos'),
  (8, 'Equipe de Segurança da Informação', 3, 'Responsável pela segurança dos sistemas e dados'),
  (9, 'Equipe de Logística', 4, 'Responsável pela logística e distribuição'),
  (10, 'Equipe de Projetos Especiais', 2, 'Responsável por projetos especiais e inovadores');

INSERT INTO Concorre (fk_Candidato_id_Candidato, fk_Processo_id_Processo) VALUES
  (1, 1),
  (2, 1),
  (3, 2),
  (4, 2),
  (5, 3),
  (6, 3),
  (7, 4),
  (8, 4),
  (9, 5),
  (10, 5);
  
INSERT INTO Gerenciado (fk_Processo_id_Processo, fk_Equipe_id_equipe) VALUES
  (1, 1),
  (2, 1),
  (3, 2),
  (4, 3),
  (5, 4),
  (6, 5),
  (7, 6),
  (8, 7),
  (9, 8),
  (10, 9);