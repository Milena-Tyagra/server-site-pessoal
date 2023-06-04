const express = require("express")
const portfolioController = require("../controllers/portfolioController")

const router = express.Router()

router.get("/", portfolioController.buscarPortfolio)
router.get("/:id", portfolioController.buscarProjetoPeloId)
router.post("/", portfolioController.criarProjeto)
router.put("/:id", portfolioController.atualizarProjeto)
router.delete("/:id", portfolioController.deletarProjeto)

module.exports = router
