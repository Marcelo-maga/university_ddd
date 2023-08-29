import express, { json } from 'express'
import { Environment } from '../environment'

export default class Server {
    private readonly express: express.Application
    private readonly port: string = Environment.port
    private readonly routes: express.Router

    constructor(routes: express.Router) {
        this.express = express()
        this.routes = routes

        this.express.use(this.routes)
        this.express.use(json())
    }

    public start = () => {
        this.express.listen(this.port, () => {
            console.log(`Servidor rodando na porta ${Environment.port} 🏆`)
        })
    }
}