import { Router as ExpressRouter } from "express";
import { PagamentoController } from "../controllers/PagamentoController";

export const pagamentoRoutes = (router: ExpressRouter) => {
  const pagamentoController: PagamentoController = new PagamentoController();

  return router;
};
