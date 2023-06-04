const express = require("express")
const informacoesController = require("../controllers/informacoesController")

const router = express.Router()

router.get("/", informacoesController.buscarInformacoes)

router.put("/", informacoesController.atualizarInformacoes)

module.exports = router
