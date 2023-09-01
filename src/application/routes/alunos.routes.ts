import { Router as ExpressRouter } from "express";
import { AlunoController } from "../controllers/AlunoController";

export const alunosRoutes = (router: ExpressRouter) => {
  const alunoController: AlunoController = new AlunoController();

  // TODO: alterar nome da rota
  /**
   * @openapi
   *  /getAllAlunos:
   *   get:
   *    description: Rota de get aluno
   *    responses:
   *    '200':
   *      description: Sucesso
   *    '500':
   *      description: Error
   *
   */
  router.get("/getAllAlunos", async (request, response) => {
    const result = await alunoController.getAllAlunos(request, response);
    response.json({ teste: result });
  });

  router.post('/alunos/addNewDiscipline', async (request, response) => {
    const result = await alunoController.addNewDiscipline(request, response)
    response.json({ aluno: result })
  })

  return router;
};
