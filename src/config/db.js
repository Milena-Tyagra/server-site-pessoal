const { Pool } = require("pg")
const bcrypt = require("bcrypt")

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

    criarUsuarioInicial()

    console.log("Banco de dados foi inicializado com sucesso!")
  } catch (error) {
    console.log(error)
  }
}

const criarUsuarioInicial = async () => {
  const saltRounds = 10
  const usuario = process.env.USER_EMAIL
  const senha = process.env.USER_PASSWORD
  const { rows } = await pool.query("SELECT * FROM usuarios WHERE email = $1", [
    usuario,
  ])

  if (!rows[0]) {
    bcrypt.hash(senha, saltRounds, async function (err, hash) {
      await pool.query(
        `
          INSERT INTO usuarios (email, senha)
          VALUES ($1, $2)
        `,[usuario, hash]
      )
    })
  }

  // bcrypt.compare("senha", "$2b$10$v6yEYiJBizg8vVG/.EtDbevbrboOdHsfY/n/EKOd/sqtzkq4gpA7m", function (err, result) {
  //   console.log(result)
  // })
}

module.exports = { pool, initDatabase }
