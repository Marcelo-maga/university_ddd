import swaggerJSDoc from "swagger-jsdoc";

export class Swagger {
  public static config: swaggerJSDoc.Options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Hello World",
        version: "1.0.0",
        description: "A simple Express Library API",
      },
    },
    apis: ["src/server/routes/*.ts"],
  };

  public static spec = swaggerJSDoc(this.config);
}
