import { Router as ExpressRouter } from "express";
import { ProdutoController } from "../controllers/ProdutoController";
import { ControllerFactory } from "../../shared.kernel/factory";

export const produtoRoutes = (router: ExpressRouter) => {
  const produtoController: ProdutoController = ControllerFactory.createProdutoController();
  
    /**
   * @swagger
   * tags:
   *   name: Produto
   *   description: Endpoints relacionados a produtos
   */

  /**
   * @swagger
   * /produto:
   *   get:
   *     summary: Retorna todos os produtos
   *     tags: [Produto]
   *     responses:
   *       200:
   *         description: Lista de todos os produtos
   *       400:
   *         description: Erro ao buscar produtos
   *       500:
   *         description: Erro interno
   */
  router.get("/produto", async (req, res) => {
    try {
      const produtos = await produtoController.getAll();
      res.status(200).json(produtos);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  /**
   * @swagger
   * /produto/{id}:
   *   get:
   *     summary: Retorna um produto pelo ID
   *     tags: [Produto]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID do produto a ser buscado
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: produto encontrado com sucesso
   *       400:
   *         description: Erro ao buscar produto por ID
   *       500:
   *         description: Erro interno
   */
  router.get("/produto/:id", async (req, res) => {
    try {
      const produto = await produtoController.get(Number(req.params.id));
      res.status(200).json(produto);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

    /**
   * @swagger
   * /produto:
   *   post:
   *     summary: Cria um novo produto
   *     tags: [Produto]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/produto'
   *     responses:
   *       201:
   *         description: Produto criado com sucesso
   *       400:
   *         description: Erro ao criar produto
   *       500:
   *         description: Erro interno
   */
    router.post("/produto", async (req, res) => {
      try {
        const produto = await produtoController.create(req.body);
        res.status(201).json(produto);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
    });

      /**
   * @swagger
   * /produto/{id}:
   *   put:
   *     summary: Atualiza um produto pelo ID
   *     tags: [Produto]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID do produto a ser atualizado
   *         schema:
   *           type: string
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/produto'
   *     responses:
   *       200:
   *         description: Produto atualizado com sucesso
   *       400:
   *         description: Erro ao atualizar produto por ID
   *       500:
   *         description: Erro interno
   */
  router.put("/produto/:id", async (req, res) => {
    try {
      const produto = await produtoController.update(
        Number(req.params.id),
        req.body
      );
      res.status(200).json(produto);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

    /**
   * @swagger
   * /produto/{id}:
   *   delete:
   *     summary: Deleta um produto pelo ID
   *     tags: [Produto]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID do produto a ser deletado
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: produto deletado com sucesso
   *       400:
   *         description: Erro ao deletar produto por ID
   *       500:
   *         description: Erro interno
   */
    router.delete("/produto/:id", async (req, res) => {
      try {
        const produto = await produtoController.delete(Number(req.params.id));
        res.status(200).json(produto);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
    });

  return router;
};
