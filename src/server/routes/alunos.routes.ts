import { Router as ExpressRouter } from 'express'
import { AlunoContoller } from '../controllers/AlunoController'

export const alunosRoutes = (router: ExpressRouter) => {
    const alunoController: AlunoContoller = new AlunoContoller()

    // TODO: alterar nome da rota
    router.get('/getAllAlunos', async (request, response) => {
        const result = await alunoController.getAllAlunos(request, response)
        response.json({ teste: result })
    })

    return router
}