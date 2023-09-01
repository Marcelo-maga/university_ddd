import express, { json } from "express";
import { Environment } from "../shared.kernel/environment";

import swaggerUi from "swagger-ui-express";
import { Swagger } from "./swagger";
import swaggerJSDoc from "swagger-jsdoc";

export default class Server {
  private readonly express: express.Application;
  private readonly port: string = Environment.port;
  private readonly routes: express.Router;

  constructor(routes: express.Router) {
    this.express = express();
    this.routes = routes;
    this.express.use(
      "/docs",
      swaggerUi.serve,
      swaggerUi.setup(
        swaggerJSDoc({
          definition: {
            openapi: "3.0.0",
            info: {
              title: "Hello World",
              version: "1.0.0",
              description: "A simple Express Library API",
            },
          },
          apis: ["src/server/routes/*.ts"],
        })
      )
    );

    this.express.use(this.routes);
    this.express.use(json());
  }

  public start = () => {
    this.express.listen(this.port, () => {
      console.log(`Servidor rodando na porta ${Environment.port} 🏆`);
    });
  };
}
