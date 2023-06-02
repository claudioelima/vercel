// Do not expose your Neon credentials to the browser
// .env
PGHOST='ep-solitary-haze-279199.us-east-2.aws.neon.tech'
PGDATABASE='neondb'
PGUSER='claudioelima'
PGPASSWORD='zdb3HBrl4yWg'
ENDPOINT_ID='falling-star-372554'

// app.js
const postgres = require('postgres');
require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

const sql = postgres(URL, { ssl: 'require' });

async function getPgVersion() {
  const result = await sql`select * from cliente`;
  console.log(result);
}

getPgVersion();