import { Router as ExpressRouter } from "express";
import { ProdutoController } from "../controllers/ProdutoController";

export const produtoRoutes = (router: ExpressRouter) => {
  const produtoController: ProdutoController = new ProdutoController();

  return router;
};
