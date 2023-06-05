const usuariosRepository = require("../repositories/usuariosRepository")
const bcrypt = require("bcrypt")

exports.login = async (req, res) => {
  const { email, senha } = req.body

  const usuario = await usuariosRepository.buscaUsuarioPeloEmail(email)
  if(!usuario) return res.status(400).json({ message: "Usuário ou senha invalidos!" })

  await bcrypt.compare(senha, usuario.senha).then(function (result) {
    if (!result)
      return res.status(400).json({ message: "Usuário ou senha invalidos!" })
  })

  return res.status(200).json({ message: "Login realizado com sucesso!" })
}
