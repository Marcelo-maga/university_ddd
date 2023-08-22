import express, { json } from 'express'

export default class Server {
    private readonly express: express.Application

    constructor() {
        this.express = express()
        this.express.use(json())
    }

    public start = () => {
        this.express.listen(3000, () => {
            console.log("Servidor rodando na porta 3000 🏆")
        })
    }

}