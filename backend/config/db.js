import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

export const connection = mysql.createConnection({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASENAME,
});
