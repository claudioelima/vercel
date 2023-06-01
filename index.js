

const {Client} = require('pg')

const port = process.env.PORT || 3001

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

/*

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: "postgres://default:L9QdCJtaY5MK@ep-sweet-mud-727945-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb",
});
pool.query('SELECT * FROM cliente', (err, res) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
    } else {
      console.log('Resultado:', res.rows);
    }
  });
  */