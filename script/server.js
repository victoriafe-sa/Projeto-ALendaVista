// Importando os módulos necessárias
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// Configurando o CORS e o parser de JSON
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuração do conexão com o banco de dados
const db =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Alendavista',
    port: 3306
});

// Conectando ao banco de dados
db.connect(err =>{
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ', err);
        return;
    }
    console.log('Conectado ao banco de dados');
});

//Rota GET para listar todas os candidatos
app.get('/api/candidatos', (req, res) =>{
    db.query('SELECT * FROM Candidato', (err, results) =>{
        if (err) {
            console.error('Erro ao buscar dados:', err);
            res.status(500).send('Erro ao buscar dados');
            return;
        }
        res.send(results);
    });
});

// Rota POST para adicionar um novo candidato
app.post(`/api/candidatos`, (req,res) => {
    const {nome, cpf, data_nascimento, email, endereco, telefone, cota_candidato} = req.body;
    const sql = 'INSERT INTO Candidato (nome, cpf, data_nascimento, email, endereco, telefone, cota_candidato) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [nome, cpf, data_nascimento, email, endereco, telefone, cota_candidato], (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados:',err);
            res.status(500).send('Erro ao inserir dados');
            return;
        }
        res.status(201).send('Cadidato adicionado com sucesso!')
    });
});

// Rota PUT para atualizar um candidato existente
app.put('/api/candidatos/:id', (req,res) => {
    const{id} = req.params;
    const {nome, cpf, data_nascimento, email, endereco, telefone, cota_candidato} = req.body;
    const sql = 'UPDATE Candidato SET nome = ?, cpf = ?, data_nascimento = ?, email = ?, endereco = ?, telefone = ?, cota_candidato = ? WHERE id_candidato = ?';
    db.query(sql, [nome, cpf, data_nascimento, email, endereco, telefone, cota_candidato, id], (err,result) =>{
        if(err){
            console.error('Erro ao atualizar dados:',err);
            res.status(500).send('Erro ao atualizar dados');
            return;
        }
        res.send('Candidato atualizado com sucesso');
    });
});

// Rota DELETE para remover um candidato
app.delete('/api/candidatos/:id', (req,res) =>{
    const{id} = req.params;
    const sql = 'DELETE FROM Candidato WHERE id_candidato = ?';
    db.query(sql, [id], (err,result) => {
        if(err){
            console.log('Erro ao deletar dados:',err);
            res.status(500).send('Erro ao deletar dados');
            return;
        }
        res.send('Candidato deletado com sucesso');
    });
});

//Iniciando o servidor na porta 3000
const PORT = 5577; // porta mudada para 5566 pois a 3000 não estava fucionando(mudado no script também)
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});