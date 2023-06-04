const portfolioRepository = require("../repositories/portfolioRepository")

exports.buscarPortfolio = async (req, res) => {
  const experiencias = await portfolioRepository.buscarPortfolio()
  res.json(experiencias)
}

exports.buscarProjetoPeloId = async (req, res) => {
  const id = parseInt(req.params.id)
  const projeto = await portfolioRepository.buscarProjetoPeloId(id)
  res.json(projeto)
}

exports.criarProjeto = async (req, res) => {
  const projeto = req.body
  const novoProjeto = await portfolioRepository.criarProjeto(projeto)
  res.json(novoProjeto)
}

exports.atualizarProjeto = async (req, res) => {
  const id = parseInt(req.params.id)
  const projeto = req.body
  const projetoAtualizado = await portfolioRepository.atualizarProjeto(
    id,
    projeto
  )
  res.json(projetoAtualizado)
}

exports.deletarProjeto = async (req, res) => {
  const id = parseInt(req.params.id)
  await portfolioRepository.deletarProjeto(id)
  res.json({ message: `Projeto ${id} deletado` })
}
