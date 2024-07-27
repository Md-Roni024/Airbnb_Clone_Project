const { Pool } = require('pg');

const USER = process.env.user
const HOST = process.env.host
const DATABASE = process.env.database
const PASSWORD = process.env.password

const pool = new Pool({
    user: USER,
    host: HOST,
    database: DATABASE,
    password: PASSWORD,
    port: 5432
  });
  
module.exports = {
    pool: pool,
    dbConnect: () => {
        return pool.connect(); 
    }
};
