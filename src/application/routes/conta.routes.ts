import { Router as ExpressRouter } from "express";
import { ContaController } from "../controllers/ContaController";
import { ControllerFactory } from "../../shared.kernel/factory";

export const contaRoutes = (router: ExpressRouter) => {
  const contaController: ContaController = ControllerFactory.createContaController();

  /**
   * @swagger
   * tags:
   *   name: Conta
   *   description: Endpoints relacionados a Conta
   */

  /**
   * @swagger
   * /conta:
   *   post:
   *     summary: Cria a conta
   *     tags: [Conta]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/produto'
   *           example:
   *                {
   *                  "id_aluno": 2,
   *                }
   *     responses:
   *       200:
   *         description: Conta criada com sucesso
   *       400:
   *         description: Erro ao criar conta
   *       500:
   *         description: Erro interno
   */
  router.post("/conta", async (req, res) => {
    try {
      const conta = await contaController.createConta(req.body.id_aluno);
      res.status(201).json(conta);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  /**
   * @swagger
   * /conta/adicionaProdutoConta:
   *   post:
   *     summary: Adiciona produto a conta
   *     tags: [Conta]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/produto'
   *           example:
   *                {
   *                  "id_conta": 2,
   *                  "id_produto": 2,
   *                }
   *     responses:
   *       200:
   *         description: Conta criada com sucesso
   *       400:
   *         description: Erro ao criar conta
   *       500:
   *         description: Erro interno
   */
  router.post("/conta/adicionaProdutoConta", async (req, res) => {
    try {
      const conta = await contaController.adicionaProdutoItemConta(req.body.id_conta, req.body.id_produto);
      res.status(201).json(conta);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  /**
   * @swagger
   * /conta/{id}:
   *   delete:
   *     summary: Deleta a conta
   *     tags: [Conta]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID da conta a ser apagada
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Conta deletada com sucesso
   *       400:
   *         description: Erro ao deletar conta
   *       500:
   *         description: Erro interno
   */
  router.delete("/conta/adicionaProdutoConta/:id", async (req, res) => {
    try {
      const conta = await contaController.deleteConta(Number(req.params.id));
      res.status(200).json(conta);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  /**
   * @swagger
   * /conta/{id}:
   *   delete:
   *     summary: Deleta a conta
   *     tags: [Conta]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID da conta a ser apagada
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Conta deletada com sucesso
   *       400:
   *         description: Erro ao deletar conta
   *       500:
   *         description: Erro interno
   */
  router.delete("/conta/:id", async (req, res) => {
    try {
      const conta = await contaController.deleteConta(Number(req.params.id));
      res.status(200).json(conta);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  return router;
};
