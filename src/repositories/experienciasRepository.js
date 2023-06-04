const { pool } = require("../config/db")

exports.buscarExperiencias = async () => {
  const { rows } = await pool.query("SELECT * FROM experiencias")
  return rows
}

exports.buscarExperienciaPeloId = async (id) => {
  const { rows } = await pool.query("SELECT * FROM experiencias WHERE id = $1", [
    id,
  ])
  return rows[0]
}

exports.criarExperiencia = async (experiencia) => {
  const { rows } = await pool.query(
    `
      INSERT INTO experiencias (empresa, periodo, descricao)
      VALUES ($1, $2, $3)
      RETURNING *
    `,
    [experiencia.empresa, experiencia.periodo, experiencia.descricao]
  )
  return rows[0]
}

exports.atualizarExperiencia = async (id, experiencia) => {
  const { rows } = await pool.query(
    `
      UPDATE experiencias
      SET empresa = $1, periodo = $2, descricao = $3
      WHERE id = $4
      RETURNING *
    `,
    [experiencia.empresa, experiencia.periodo, experiencia.descricao, id]
  )
  return rows[0]
}

exports.deletarExperiencia = async (id) => {
  await pool.query("DELETE FROM experiencias WHERE id = $1", [id])
}
