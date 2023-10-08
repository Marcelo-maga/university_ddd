import { Router as ExpressRouter } from "express";
import { MatriculaController } from "../controllers/MatriculaController";

export const alunosRoutes = (router: ExpressRouter) => {
  const matriculaController: MatriculaController = new MatriculaController();

  router.get("/matricula/getAll", async (request, response) => {
    const result = await matriculaController.getAllMatriculas(
      request,
      response
    );
    response.json({ data: result });
  });

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

  return router;
};
