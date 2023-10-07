import { Disciplina } from "../../domains/secretary";
import { createPrismaClient } from "../prisma";
import { IDisciplinaRepository } from "../types/IDisciplinaRepository";

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
    return new Array(
      new Disciplina({
        disciplinaId: 1,
        disponivel: true,
        ead: true,
        nome: "Engenharia de Software",
        valor: 23.24,
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
