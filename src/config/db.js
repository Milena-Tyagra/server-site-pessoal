const { Pool } = require("pg")

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
})

const initDatabase = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS experiencias (
        id SERIAL PRIMARY KEY,
        empresa VARCHAR(255) NOT NULL,
        periodo VARCHAR(255) NOT NULL,
        descricao TEXT NOT NULL
      );
    `)

    await pool.query(`
      CREATE TABLE IF NOT EXISTS portfolio (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL,
        link_aplicacao VARCHAR(255),
        link_repositorio VARCHAR(255) NOT NULL,
        descricao TEXT NOT NULL,
        tecnologias VARCHAR(25)[] NOT NULL
      );
    `)

    await pool.query(`
      CREATE TABLE IF NOT EXISTS certificacoes (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL,
        instituicao VARCHAR(255) NOT NULL
      );
    `)

    await pool.query(`
      CREATE TABLE IF NOT EXISTS informacoes (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        foto VARCHAR(255) NOT NULL,
        cargo VARCHAR(255) NOT NULL,
        resumo TEXT NOT NULL
      );
    `)

    await pool.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        senha VARCHAR(255) NOT NULL
      );
    `)
    console.log("Banco de dados foi inicializado com sucesso!")
  } catch (error) {
    console.log(error)
  }
}

module.exports = { pool, initDatabase }
