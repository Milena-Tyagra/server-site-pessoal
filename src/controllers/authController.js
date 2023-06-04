const usuariosRepository = require("../repositories/usuariosRepository")

exports.login = async (req, res) => {
  const { email, senha } = req.body

  const usuario = await usuariosRepository.buscaUsuarioPeloEmail(email)

  if (!usuario || usuario.senha !== senha) {
    return res.status(400).json({ message: "Usuário ou senha invalidos!" })
  }

  return res.status(200).json({ message: "Login realizado com sucesso!" })
}
