const informacoesRepository = require("../repositories/informacoesRepository")

exports.buscarInformacoes = async (req, res) => {
  const informacoes = await informacoesRepository.buscarInformacoes()
  res.json(informacoes)
}

exports.atualizarInformacoes = async (req, res) => {
  const informacoes = req.body
  const informacoesAtualizadas = await informacoesRepository.atualizarInformacoes(informacoes)
  res.json(informacoesAtualizadas)
}
