const express = require("express")
const certificacoesController = require("../controllers/certificacoesController")

const router = express.Router()

router.get("/", certificacoesController.buscarCertificacoes)
router.get("/:id", certificacoesController.buscarCertificacaoPeloId)
router.post("/", certificacoesController.criarCertificacao)
router.put("/:id", certificacoesController.atualizarCertificacao)
router.delete("/:id", certificacoesController.deletarCertificacao)

module.exports = router
