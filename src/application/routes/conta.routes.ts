import { Router as ExpressRouter } from "express";
import { ContaController } from "../controllers/ContaController";

export const contaRoutes = (router: ExpressRouter) => {
  const contaController: ContaController = new ContaController();

  return router;
};
