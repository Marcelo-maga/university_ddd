import express, { Router, json } from "express";
import { Environment } from "../shared.kernel/environment";

import swaggerUi from "swagger-ui-express";
import { Swagger } from "./swagger";
import { setupRoutes } from "./routes/routes";

const router = Router();

export default class Server {
  private readonly express: express.Application;
  private readonly port: string = Environment.port;

  constructor() {
    this.express = express();
    this.express.use("/docs", swaggerUi.serve, swaggerUi.setup(Swagger.spec));
    this.express.use(json());
  }

  public start = () => {
    this.express.use(setupRoutes(router))

    this.express.listen(this.port, () => {
      console.log(`Servidor rodando na porta ${Environment.port} 🏆`);
    });
  };
}
