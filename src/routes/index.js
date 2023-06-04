const express = require("express")
const app = express()
const cors = require("cors")

const experienciasRoute = require("./experienciasRoute")
const portfolioRoute = require("./portfolioRoute")
const certificacoesRoute = require("./certificacoesRoute")
const informacoesRoute = require("./informacoesRoute")
const authRoute = require("./authRoute")

app.use(cors())
app.use(express.json())

app.use("/api/experiencias", experienciasRoute)
app.use("/api/portfolio", portfolioRoute)
app.use("/api/certificacoes", certificacoesRoute)
app.use("/api/informacoes", informacoesRoute)
app.use("/api/auth", authRoute)

module.exports = app
