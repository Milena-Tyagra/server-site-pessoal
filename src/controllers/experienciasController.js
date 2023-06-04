const experienciasRepository = require("../repositories/experienciasRepository")

exports.buscarExperiencias = async (req, res) => {
  const experiencias = await experienciasRepository.buscarExperiencias()
  res.json(experiencias)
}

exports.buscarExperienciaPeloId = async (req, res) => {
  const id = parseInt(req.params.id)
  const experiencia = await experienciasRepository.buscarExperienciaPeloId(id)
  res.json(experiencia)
}

exports.criarExperiencia = async (req, res) => {
  const experiencia = req.body
  const novaExperiencia = await experienciasRepository.criarExperiencia(
    experiencia
  )
  res.json(novaExperiencia)
}

exports.atualizarExperiencia = async (req, res) => {
  const id = parseInt(req.params.id)
  const experiencia = req.body
  const experienciaAtualizada = await experienciasRepository.atualizarExperiencia(
    id,
    experiencia
  )
  res.json(experienciaAtualizada)
}

exports.deletarExperiencia = async (req, res) => {
  const id = parseInt(req.params.id)
  await experienciasRepository.deletarExperiencia(id)
  res.json({ message: `Experiência ${id} deletada` })
}
