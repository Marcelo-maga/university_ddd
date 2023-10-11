import { Router as ExpressRouter } from "express";
import { PagamentoController } from "../controllers/PagamentoController";
import { ControllerFactory } from "../../shared.kernel/factory";

export const pagamentoRoutes = (router: ExpressRouter) => {
  const pagamentoController: PagamentoController =
    ControllerFactory.createPagamentoController();

  /**
   * @swagger
   * tags:
   *   name: Pagamento
   *   description: Endpoints relacionados a Pagamento
   */

  /**
   * @swagger
   * /pagamento/{id}:
   *   post:
   *     summary: Fecha a conta
   *     tags: [Pagamento]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID da conta
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
   *         description: Pagamento feito com sucesso
   *       400:
   *         description: Erro ao efetuar o pagamento
   *       500:
   *         description: Erro interno
   */
  router.post("/pagamento/:id", async (req, res) => {
    try {
      const conta = await pagamentoController.fechaPagamento(req.body);
      res.status(201).json(conta);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  return router;
};
