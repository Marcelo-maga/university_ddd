import { Router as ExpressRouter } from "express";
import { alunosRoutes } from "./alunos.routes";
import { disciplinaRoutes } from "./disciplina.routes";

export const Router = (): ExpressRouter => {
  const router = ExpressRouter();

  /**
   * @swagger
   * components:
   *   schemas:
   *     Discplina:
   *       type: object
   *       properties:
   *         id:
   *           type: string
   *           description: Identificador único da disciplina
   *           example: 1
   *         nome:
   *           type: string
   *           description: Nome da disciplina
   *           example: Matemática
   *         valor:
   *           type: number
   *           description: Valor da disciplina
   *           example: 100
   *         disponivel:
   *           type: boolean
   *           description: Disponibilidade da disciplina
   *           example: true
   *         ead:
   *           type: boolean
   *           description: Se a disciplina é EAD
   *           example: true
   */
  router.get("/", (request, response) => {
    response.json({ message: "Olá mundo" });
  });

  // router.use(alunosRoutes(router));
  router.use(disciplinaRoutes(router));

  return router;
};
