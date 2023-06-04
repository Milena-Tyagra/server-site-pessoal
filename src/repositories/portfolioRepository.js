const { pool } = require("../config/db")

exports.buscarPortfolio = async () => {
  const { rows } = await pool.query("SELECT * FROM portfolio")
  return rows
}

exports.buscarProjetoPeloId = async (id) => {
  const { rows } = await pool.query("SELECT * FROM portfolio WHERE id = $1", [id])
  return rows[0]
}

exports.criarProjeto = async (projeto) => {
  const { rows } = await pool.query(
    `
      INSERT INTO portfolio (titulo, link_aplicacao, link_repositorio, descricao, tecnologias)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `,
    [
      projeto.titulo,
      projeto.link_aplicacao,
      projeto.link_repositorio,
      projeto.descricao,
      projeto.tecnologias,
    ]
  )
  return rows[0]
}

exports.atualizarProjeto = async (id, projeto) => {
  const { rows } = await pool.query(
    `
      UPDATE portfolio
      SET titulo = $1, tecnologias = $2, descricao = $3, link_aplicacao = $4, link_repositorio = $5
      WHERE id = $6
      RETURNING *
    `,
    [
      projeto.titulo,
      projeto.tecnologias,
      projeto.descricao,
      projeto.link_aplicacao,
      projeto.link_repositorio,
      id,
    ]
  )
  return rows[0]
}

exports.deletarProjeto = async (id) => {
  await pool.query("DELETE FROM portfolio WHERE id = $1", [id])
}
