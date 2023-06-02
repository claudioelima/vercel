const express = require('express');
const mysql = require('mysql2');

const app = express();

const host = '0.0.0.0'
const port = 5000;

// Configurações de conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: '0.0.0.0',
  user: '',
  password: '',
  database: ''
});

// Conecta-se ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro de conexão:', err);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados!');
  }
});

// Rota para realizar o SELECT e exibir os resultados
app.get('/dados', (req, res) => {
  connection.query('SELECT * FROM cliente', (err, results) => {
    if (err) {
      console.error('Erro na consulta:', err);
      res.status(500).send('Erro ao consultar o banco de dados.');
    } else {
      console.log('Resultados:', results);
      res.send(results);
    }
  });
});

// Inicia o servidor na porta desejada
app.listen(port, host, () => {
    console.log(`Servidor Node.js rodando em http://${host}:${port}`);
  });

  