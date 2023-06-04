const certificacoesRepository = require("../repositories/certificacoesRepository")

exports.buscarCertificacoes = async (req, res) => {
  const certificacoes = await certificacoesRepository.buscarCertificacoes()
  res.json(certificacoes)
}

exports.buscarCertificacaoPeloId = async (req, res) => {
  const id = parseInt(req.params.id)
  const certificacao = await certificacoesRepository.buscarCertificacaoPeloId(
    id
  )
  res.json(certificacao)
}

exports.criarCertificacao = async (req, res) => {
  const certificacao = req.body
  const novaCertificacao = await certificacoesRepository.criarCertificacao(
    certificacao
  )
  res.json(novaCertificacao)
}

exports.atualizarCertificacao = async (req, res) => {
  const id = parseInt(req.params.id)
  const certificacao = req.body
  const certificacaoAtualizada =
    await certificacoesRepository.atualizarCertificacao(id, certificacao)
  res.json(certificacaoAtualizada)
}

exports.deletarCertificacao = async (req, res) => {
  const id = parseInt(req.params.id)
  await certificacoesRepository.deletarCertificacao(id)
  res.json({ message: `Certificação ${id} deletada` })
}
