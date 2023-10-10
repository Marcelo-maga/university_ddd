import express, { Router, json } from "express";
import { Environment } from "../shared.kernel/environment";

import swaggerUi from "swagger-ui-express";
import { Swagger } from "./swagger";
import swaggerJSDoc from "swagger-jsdoc";
import { setupRoutes } from "./routes/routes";
import { AlunoController, DisciplinaController, MatriculaController } from "./controllers";
import { ControllerFactory } from "../shared.kernel/factory";
const router = Router();
export default class Server {
  private readonly express: express.Application;
  private readonly port: string = Environment.port;

  constructor() {
    this.express = express();
    this.express.use("/docs", swaggerUi.serve, swaggerUi.setup(Swagger.spec));

    this.express.use(json());
  }

  public start = () => {
    const matriculaController: MatriculaController = ControllerFactory.createMatriculaController();
    const disciplinaController: DisciplinaController = ControllerFactory.createDisciplinaController();
    const alunoController: AlunoController = ControllerFactory.createAlunoController();

    /**
     * @swagger
     * /matricula/getAll:
     *  get:
     *   description: Use to request all matriculas
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
     *     tags: [Aluno]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Aluno'
     *     responses:
     *       201:
     *         description: Aluno criado com sucesso
     *       400:
     *         description: Erro ao criar aluno
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

    /**
     * @swagger
     * /aluno:
     *   get:
     *     summary: Retorna todos os alunos
     *     tags: [Aluno]
     *     responses:
     *       200:
     *         description: Lista de todos os alunos
     *       400:
     *         description: Erro ao buscar alunos
     *       500:
     *         description: Erro interno
     */
    router.get("/aluno", async (req, res) => {
      try {
        const alunos = await alunoController.getAll();
        res.status(200).json(alunos);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
    });

    /**
     * @swagger
     * /aluno/{id}:
     *   get:
     *     summary: Retorna um aluno pelo ID
     *     tags: [Aluno]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID do aluno a ser buscado
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Aluno encontrado com sucesso
     *       400:
     *         description: Erro ao buscar aluno por ID
     *       500:
     *         description: Erro interno
     */
    router.get("/aluno/:id", async (req, res) => {
      try {
        const aluno = await alunoController.get(Number(req.params.id));
        res.status(200).json(aluno);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
    });

    /**
     * @swagger
     * /aluno:
     *   post:
     *     summary: Cria um novo aluno
     *     tags: [Aluno]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Aluno'
     *     responses:
     *       201:
     *         description: Aluno criado com sucesso
     *       400:
     *         description: Erro ao criar aluno
     *       500:
     *         description: Erro interno
     */
    router.post("/aluno", async (req, res) => {
      try {
        const aluno = await alunoController.create(req.body);
        res.status(201).json(aluno);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
    });

    /**
     * @swagger
     * /aluno/{id}:
     *   put:
     *     summary: Atualiza um aluno pelo ID
     *     tags: [Aluno]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID do aluno a ser atualizado
     *         schema:
     *           type: string
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Aluno'
     *     responses:
     *       200:
     *         description: Aluno atualizado com sucesso
     *       400:
     *         description: Erro ao atualizar aluno por ID
     *       500:
     *         description: Erro interno
     */
    router.put("/aluno/:id", async (req, res) => {
      try {
        const aluno = await alunoController.update(
          Number(req.params.id),
          req.body
        );
        res.status(200).json(aluno);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
    });

    /**
     * @swagger
     * /aluno/{id}:
     *   delete:
     *     summary: Deleta um aluno pelo ID
     *     tags: [Aluno]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID do aluno a ser deletado
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Aluno deletado com sucesso
     *       400:
     *         description: Erro ao deletar aluno por ID
     *       500:
     *         description: Erro interno
     */
    router.delete("/aluno/:id", async (req, res) => {
      try {
        const aluno = await alunoController.delete(Number(req.params.id));
        res.status(200).json(aluno);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
    });

    this.express.listen(this.port, () => {
      console.log(`Servidor rodando na porta ${Environment.port} 🏆`);
    });
  };
}
