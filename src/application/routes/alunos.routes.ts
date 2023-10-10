import { Router as ExpressRouter } from "express";
import { AlunoController } from "../controllers/AlunoController";

export const alunosRoutes = (router: ExpressRouter) => {
  const alunoController: AlunoController = new AlunoController();
  /**
   * @swagger
   * tags:
   *   name: Aluno
   *   description: Endpoints relacionados a alunos
   */

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

  return router;
};
