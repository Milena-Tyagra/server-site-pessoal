const express = require("express")
const experienciasController = require("../controllers/experienciasController")

const router = express.Router()

router.get("/", experienciasController.buscarExperiencias)
router.get("/:id", experienciasController.buscarExperienciaPeloId)
router.post("/", experienciasController.criarExperiencia)
router.put("/:id", experienciasController.atualizarExperiencia)
router.delete("/:id", experienciasController.deletarExperiencia)

module.exports = router
