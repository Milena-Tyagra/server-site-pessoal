require("./config/dotenv")
require("express-async-errors")
const express = require("express")
const routes = require("./routes")
const { initDatabase } = require("./config/db")

const app = express()
const port = process.env.APP_PORT || 5000

app.get("/", (req, res) => {
  res.send("Seja bem vindo à API do Meu Site Pessoal")
})

app.use(express.json())
app.use(routes)

initDatabase()

app.use((err, req, res, next) => {
  res.status(500).send({ erro: err.message })
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
