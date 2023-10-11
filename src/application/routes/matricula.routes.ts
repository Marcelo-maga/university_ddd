import { Router as ExpressRouter } from "express";
import { MatriculaController } from "../controllers/MatriculaController";

export const matriculaRoutes = (router: ExpressRouter) => {
  const matriculaController: MatriculaController = new MatriculaController();

  /**
   * @swagger
   * /matricula/getAll:
   *  get:
   *   description: Use to request all matriculas
   *   tags: [Matricula]
   *   responses:
   *    200:
   *     description: A successful response
   *    400:
   *     description: Error
   */
  router.get("/matricula/getAll", async (request, response) => {
    const result = await matriculaController.getAllMatriculas(
      request,
      response
    );
    response.json({ data: result });
  });


  /**
   * @swagger
   * /matricula/fazerMatricula:
   *   post:
   *     summary: Cria uma nova matricula
   *     tags: [Matricula]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Matricula'
   *           example:
   *                {
   *                  "dataCadastro": "2023-10-10T23:32:49.412Z",
   *                  "dataInicio": "2023-10-10T23:32:49.412Z",
   *                  "previsaoFim": "2023-10-10T23:32:49.412Z",
   *                  "curso": "Engenharia de Software",
   *                  "alunoId": 1,
   *                }
   *     responses:
   *       201:
   *         description: Matricula Trancada com sucesso
   *       400:
   *         description: Erro ao trancar matricula
   *       500:
   *         description: Erro interno
   */
  router.post("/matricula/fazerMatricula", async (request, response) => {
    try {
      const result = await matriculaController.fazerMatricula(
        request,
        response
      );
      response.json({ matricula: result });
    } catch (error: any) {
      response.status(400).json({ message: error.message });
    }
  });

  /**
   * @swagger
   * /matricula/trancarMatricula:
   *   put:
   *     summary: Trancar Matricula   
   *     tags: [Matricula]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Matricula'
   *           example:
   *                {
   *                    "matriculaId": 1
   *                }
   *     responses:
   *       200:
   *         description: Matricula trancada com sucesso
   *       400:
   *         description: Erro ao trancar matricula
   *       500:
   *         description: Erro interno
   */
  router.put("/matricula/trancarMatricula", async (request, response) => {
    try {
      const result = await matriculaController.trancarMatricula(
        request,
        response
      );
      response.json({ matricula: result });
    } catch (error: any) {
      response.status(400).json({ message: error.message });
    }
  });

  return router;
};
