import Disciplina from "../../domain/Disciplina";
import { IDisciplinaRepository } from "../types/IDisciplinaRepository";

export class DisciplinaRepository implements IDisciplinaRepository {
  public async get(): Promise<Disciplina> {
    return new Disciplina({
      disciplinaId: 1,
      disponivel: true,
      ead: true,
      nome: "Engenharia de Software",
      valor: 23.24,
    });
  }

  public async getAll(): Promise<Disciplina[]> {
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
    return new Disciplina({
      disponivel: disciplina.disponivel,
      ead: disciplina.ead,
      nome: disciplina.nome,
      valor: disciplina.valor,
    });
  }

  public async update(
    disciplinaId: Disciplina["disciplinaId"],
    disciplina: Partial<Disciplina>
  ): Promise<Disciplina> {
    // temporario: para mockar o que o próprio Prisma ORM faria
    let disciplinaToBeUpdated: Partial<Disciplina> = new Disciplina({
      disciplinaId: 1,
      disponivel: true,
      ead: true,
      nome: "Engenharia de Software",
      valor: 23.24,
    });

    disciplinaToBeUpdated = {
      disciplinaId,
      ...disciplina,
    };

    return new Promise<Disciplina>(() => disciplinaToBeUpdated);
  }
}
