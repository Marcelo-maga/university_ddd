import express from "express"
const app = express()

app.get("/docker", (req, res) => {
  res.send("docker on! 🟢")
})

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 🏆")
})