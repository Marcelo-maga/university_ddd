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
      response.status(400).json({
        message: "Não foi possível criar disciplina",
        error: error.message,
      });
    }
  });


  /**
   * @swagger
   *  /disciplina/{disciplinaId}:
   *    get:
   *      description: Obter disciplina
   *      tags:
   *        - Disciplina
   *      summary: Obter disciplina
   *      parameters:
   *        - in: path
   *          name: disciplinaId
   *          required: true
   *          description: Id da disciplina
   *          schema:
   *            type: integer
   *            minimum: 1
   *            example: 1
   *            description: Id da disciplina
   *            required: true
   *            format: int64
   *      responses:
   *        200:
   *          description: Disciplina obtida com sucesso
   *          content:
   *            application/json:
   *              schema:
   *                $ref: '#/components/schemas/Disciplina'
   *              example:
   *                  {
   *                    "disciplinaId": 1,
   *                    "nome": "Matemática",
   *                    "valor": 100,
   *                    "disponivel": true,
   *                    "ead": true
   *                  }
   *        400:
   *          description: Erro ao obter disciplina
   *        500:
   *          description: Erro interno
   */
  router.get("/disciplina/:disciplinaId", async (request, response) => {
    try {
      const result = await disciplinaController.get(
        Number(request.params.disciplinaId)
      );
      response.status(200).json(result);
    } catch (error: any) {
      response.status(400).json({
        message: "Não foi possível obter disciplina",
        error: error.message,
      });
    }
  });

  /**
   * @swagger
   *  /disciplina:
   *    get:
   *      description: Listar disciplinas
   *      tags:
   *        - Disciplina
   *      summary: Listar disciplinas
   *      responses:
   *        200:
   *          description: Disciplinas obtidas com sucesso
   *          content:
   *            application/json:
   *              schema:
   *                $ref: '#/components/schemas/Disciplina'
   *              example:
   *                [
   *                  {
   *                    "disciplinaId": 1,
   *                    "nome": "Matemática",
   *                    "valor": 100,
   *                    "disponivel": true,
   *                    "ead": true
   *                  },
   *                  {
   *                    "disciplinaId": 12,
   *                    "nome": "Português",
   *                    "valor": 100,
   *                    "disponivel": true,
   *                    "ead": true
   *                  },
   *                ]
   *        400:
   *          description: Erro ao obter disciplinas
   *        500:
   *          description: Erro interno
   */
  router.get("/disciplina", async (request, response) => {
    try {
      const result = await disciplinaController.getAll();
      response.status(200).json(result);
    } catch (error: any) {
      response.status(400).json({
        message: "Não foi possível obter disciplinas",
        error: error.message,
      });
    }
  });
  /**
   * @swagger
   *  /disciplina/{disciplinaId}:
   *    put:
   *      description: Atualizar disciplina
   *      tags:
   *        - Disciplina
   *      summary: Atualizar disciplina
   *      parameters:
   *        - in: path
   *          name: disciplinaId
   *          required: true
   *          description: Id da disciplina
   *          schema:
   *            type: integer
   *            minimum: 1
   *            example: 1
   *            description: Id da disciplina
   *            required: true
   *            format: int64
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/Disciplina'
   *            example:
   *              {
   *                "nome": "Novo Nome",
   *                "valor": 200,
   *                "disponivel": true,
   *                "ead": true
   *              }
   *      responses:
   *        200:
   *          description: Disciplina editada com sucesso
   *          content:
   *            application/json:
   *              schema:
   *                $ref: '#/components/schemas/Disciplina'
   *              example:
   *                {
   *                  "disciplinaId": 1,
   *                  "nome": "Matemática",
   *                  "valor": 100,
   *                  "disponivel": true,
   *                  "ead": true
   *                }
   *        400:
   *          description: Erro ao obter disciplinas
   *        500:
   *          description: Erro interno
   *
   */

  router.put("/disciplina/:disciplinaId", async (request, response) => {
    try {
      const result = await disciplinaController.update(
        Number(request.params.disciplinaId),
        request.body
      );
      response.status(200).json(result);
    } catch (error: any) {
      response.status(400).json({
        message: "Não foi possível atualizar disciplina",
        error: error.message,
      });
    }
  });

  /**
   * @swagger
   *  /disciplina/{disciplinaId}:
   *    delete:
   *      description: Deletar disciplina
   *      tags:
   *        - Disciplina
   *      summary: Deletar disciplina
   *      parameters:
   *        - in: path
   *          name: disciplinaId
   *          required: true
   *          description: Id da disciplina
   *          schema:
   *            type: integer
   *            minimum: 1
   *            example: 1
   *            description: Id da disciplina
   *            required: true
   *            format: int64
   *      responses:
   *        200:
   *          description: Disciplina deletada com sucesso
   *          content:
   *            application/json:
   *              schema:
   *                $ref: '#/components/schemas/Disciplina'
   *              example:
   *                {
   *                  "disciplinaId": 1,
   *                  "nome": "Matemática",
   *                  "valor": 100,
   *                  "disponivel": true,
   *                  "ead": true
   *                }
   *        400:
   *          description: Erro ao deletar disciplina
   *        500:
   *          description: Erro interno
   */
  router.delete("/disciplina/:disciplinaId", async (request, response) => {
    try {
      const result = await disciplinaController.delete(
        Number(request.params.disciplinaId)
      );
      response.status(200).json(result);
    } catch (error: any) {
      response.status(400).json({
        message: "Não foi possível deletar disciplina",
        error: error.message,
      });
    }
  });

  return router;
};
