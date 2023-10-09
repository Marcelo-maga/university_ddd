import { Router as ExpressRouter } from "express";
import { alunosRoutes } from "./alunos.routes";
import { disciplinaRoutes } from "./disciplina.routes";

export const Router = (): ExpressRouter => {
  const router = ExpressRouter();

  /**
   * @swagger
   * components:
   *   schemas:
   *     Disciplina:
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
  
  /**
   * @swagger
   * components:
   *   schemas:
   *     Aluno:
   *      type: object
   *      properties:
   *        id:
   *          type: string
   *          description: Identificador único do aluno
   *          example: 1
   *        nome:
   *          type: string
   *          description: Nome do aluno
   *          example: João
   *        sobrenome:
   *          type: string
   *          description: Sobrenome do aluno
   *          example: Silva
   *        email:
   *          type: string
   *          description: Email do aluno
   *          example: 'aluno@email.com'
   *        dataCadastro:
   *          type: string
   *          description: Data de cadastro do aluno
   *          example: '2021-01-01'
   *        ativo:
   *          type: boolean
   *          description: Se o aluno está ativo
   *          example: true
   *        disciplinas:
   *          type: array 
   *          items:
   *            $ref: '#/components/schemas/Disciplina'
   *          description: Disciplinas do aluno
   *          example: []
   */
  router.get("/", (request, response) => {
    response.json({ message: "Olá mundo" });
  });

  // router.use(alunosRoutes(router));
  // router.use(disciplinaRoutes(router));
  router.use(alunosRoutes(router));

  return router;
};
