const { pool } = require("../config/db")

exports.buscarCertificacoes = async () => {
  const { rows } = await pool.query("SELECT * FROM certificacoes")
  return rows
}

exports.buscarCertificacaoPeloId = async (id) => {
  const { rows } = await pool.query("SELECT * FROM certificacoes WHERE id = $1", [
    id,
  ])
  return rows[0]
}

exports.criarCertificacao = async (certificacao) => {
  const { rows } = await pool.query(
    `
      INSERT INTO certificacoes (titulo, instituicao)
      VALUES ($1, $2)
      RETURNING *
    `,
    [certificacao.titulo, certificacao.instituicao]
  )
  return rows[0]
}

exports.atualizarCertificacao = async (id, certificacao) => {
  const { rows } = await pool.query(
    `
      UPDATE certificacoes
      SET titulo = $1, instituicao = $2
      WHERE id = $3
      RETURNING *
    `,
    [certificacao.titulo, certificacao.instituicao, id]
  )
  return rows[0]
}

exports.deletarCertificacao = async (id) => {
  await pool.query("DELETE FROM certificacoes WHERE id = $1", [id])
}
