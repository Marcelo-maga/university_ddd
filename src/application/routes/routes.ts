import { Router as ExpressRouter } from 'express'
import { alunosRoutes } from './alunos.routes'

export const Router = (): ExpressRouter => {
    const router = ExpressRouter()

    router.get('/', (request, response) => {
        response.json({ message: "Olá mundo" })
    })

    router.use(alunosRoutes(router))

    return router
}