const { pool } = require("../config/db")

exports.buscarInformacoes = async () => {
  const { rows } = await pool.query("SELECT * FROM informacoes")
  return rows[0]
}

exports.atualizarInformacoes = async (informacoes) => {
  const id = informacoes.id
  const { rows } = await pool.query(
    `
      UPDATE informacoes
      SET nome = $1, foto = $2, cargo = $3, resumo = $4
      WHERE id = $5
      RETURNING *
    `,
    [
      informacoes.nome,
      informacoes.foto,
      informacoes.cargo,
      informacoes.resumo,
      id,
    ]
  )
  return rows[0]
}
