const { pool } = require("../config/db")

exports.buscaUsuarioPeloEmail = async (email) => {
  const { rows } = await pool.query("SELECT * FROM usuarios WHERE email = $1", [
    email,
  ])
  return rows[0]
}
