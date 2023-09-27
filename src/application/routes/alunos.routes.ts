import { Router as ExpressRouter } from "express";
import { AlunoController } from "../controllers/AlunoController";

export const alunosRoutes = (router: ExpressRouter) => {
  const alunoController: AlunoController = new AlunoController();

  // TODO: alterar nome da rota
  /**
   * @openapi
   * /alunos/getAll:
   *   get:
   *     description: Rota de get aluno
   *     responses:
   *       '200':
   *         description: Sucesso
   *       '500':
   *         description: Error
   *
   */
  router.get("/alunos/getAll", async (request, response) => {
    const result = await alunoController.getAllAlunos(request, response);
    response.json({ teste: result });
  });

  /**
   * @openapi
   *  /alunos/addNewDiscipline:
   *   post:
   *    description: Rota de get aluno
   *    responses:
   *    '200':
   *      description: Sucesso
   *    '500':
   *      description: Error
   *
   */
  router.post('/alunos/addNewDiscipline', async (request, response) => {
    try {
      const result = await alunoController.addNewDiscipline(request, response)
      response.json({ aluno: result })
    } catch (error: any) {
      response.status(400).json({ "message": error.message })
    }
  })

  return router;
};
