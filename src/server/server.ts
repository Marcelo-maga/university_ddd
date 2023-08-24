import express, { json } from 'express'

export default class Server {
    private readonly express: express.Application
    private readonly port: number = 3000
    private readonly routes: express.Router

    constructor(routes: express.Router) {
        this.express = express()
        this.routes = routes

        this.express.use(this.routes)
        this.express.use(json())
    }

    public start = () => {
        this.express.listen(this.port, () => {
            console.log("Servidor rodando na porta 3000 🏆")
        })
    }

}