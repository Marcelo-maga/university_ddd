import { Disciplina } from "../../domain/Disciplina";
import { createPrismaClient } from "../../../shared.kernel/prisma";
import { IDisciplinaRepository } from "../interfaces/IDisciplinaRepository";

export class DisciplinaRepository implements IDisciplinaRepository {
  private prisma = createPrismaClient();

  public async get(
    disciplinaId?: number,
    nome?: string
  ): Promise<Disciplina | null> {
    const response_database = await this.prisma.disciplina.findUnique({
      where: {
        id_disciplina: disciplinaId,
        ...(nome && { nome }),
      },
    });

    if (!response_database) return null;

    return new Disciplina({
      disciplinaId: response_database!.id_disciplina,
      disponivel: response_database!.disponivel,
      ead: response_database!.ead,
      nome: response_database!.nome,
      valor: response_database!.valor,
    });
  }

  public async getAll(): Promise<Disciplina[] | null> {
    const response_database = await this.prisma.disciplina.findMany();

    if (!response_database) return null;

    return response_database.map(
      (disciplina) =>
        new Disciplina({
          disciplinaId: disciplina.id_disciplina,
          disponivel: disciplina.disponivel,
          ead: disciplina.ead,
          nome: disciplina.nome,
          valor: disciplina.valor,
        })
    );
  }

  public async create(
    disciplina: Omit<Disciplina, "disciplinaId">
  ): Promise<Omit<Disciplina, "disciplinaId">> {
    const disciplinaCriada = await this.prisma.disciplina.create({
      data: disciplina,
    });

    return new Disciplina(disciplinaCriada);
  }

  public async update(
    disciplinaId: Disciplina["disciplinaId"],
    disciplina: Partial<Disciplina>
  ): Promise<Disciplina> {
    const disciplinaAtualizada = await this.prisma.disciplina.update({
      where: {
        id_disciplina: disciplinaId,
      },
      data: disciplina,
    });

    return new Disciplina(disciplinaAtualizada);
  }

  public async delete(
    disciplinaId: Disciplina["disciplinaId"]
  ): Promise<Disciplina> {
    const disciplinaDeletada = await this.prisma.disciplina.delete({
      where: {
        id_disciplina: disciplinaId,
      },
    });

    return new Disciplina(disciplinaDeletada);
  }
}
