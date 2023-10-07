import { Router as ExpressRouter } from "express";
import { DisciplinaController } from "../controllers";
import { ControllerFactory } from "../../shared.kernel/factory";

export const disciplinaRoutes = (router: ExpressRouter) => {
  const disciplinaController: DisciplinaController =
    ControllerFactory.createDisciplinaController();

  /**
   * @swagger
   * /disciplina:
   *   post:
   *     description: Criar uma nova disciplina
   *     tags:
   *       - Disciplina
   *     summary: Cria uma nova disciplina
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Disciplina'
   *           example:
   *             nome: Matemática
   *             valor: 100
   *             disponivel: true
   *             ead: true
   *     responses:
   *       200:
   *         description: Disciplina criada com sucesso
   *       400:
   *         description: Erro ao criar disciplina
   *       500:
   *         description: Erro interno
   */
  router.post("/disciplina", async (request, response) => {
    try {
      const result = await disciplinaController.create(request.body);
      response
        .status(201)
        .json({ message: "Disciplina criada com sucesso", result });
    } catch (error: any) {
      response
        .status(400)
        .json({ message: "Não foi possível criar disciplina", error: error.message });
    }
  });

  return router;
};
