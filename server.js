

const {Client} = require('pg')

//const port = process.env.PORT || 3001

const client = new Client({
    host:"ep-sweet-mud-727945-pooler.us-east-1.postgres.vercel-storage.com",
    user:"default",
    port:5432,
    password:"L9QdCJtaY5MK",
    database:"verceldb"
    })
    client.connect()
    client.query('select from cliente', (err,res)=> {
        if(!err){
            console.table(res.rows)
        } else {
            console.log(err.message)
        }
        client.end
    })


const { Pool } = require('pg');

const port = process.env.PORT || 3001

const pool = new Pool({
  user:"default",
  host:"ep-sweet-mud-727945-pooler.us-east-1.postgres.vercel-storage.com",
  database:"verceldb",
  password:"L9QdCJtaY5MK",
  port: 5432, // porta padrão do PostgreSQL
});

app.get('/dados', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cliente');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao executar a consulta:', err);
    res.status(500).send('Erro ao buscar dados no banco de dados');
  }
});

app.listen(3001, () => {
  console.log('Servidor Node.js em execução na porta 3001');
});

/*
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.get('/sobre', (req, res) => {
  res.send('Esta é a página Sobre');
});

app.get('/contato', (req, res) => {
  res.send('Esta é a página de Contato');
});

app.listen(3000, () => {
  console.log('O aplicativo está ouvindo na porta 3000!');
});
*/