import Disciplina from "../../domain/Disciplina";
import { createPrismaClient } from "../prisma";
import { IDisciplinaRepository } from "../types/IDisciplinaRepository";

export class DisciplinaRepository implements IDisciplinaRepository {
  private prisma = createPrismaClient()
  
  public async get(disciplinaId: number): Promise<Disciplina | null> {
    const response_database = await this.prisma.disciplina.findUnique({
      where: {
          id_disciplina: disciplinaId
        }
    })

    if(!response_database) return null
    
    return new Disciplina({
      disciplinaId: response_database!.id_disciplina,
      disponivel: response_database!.disponivel,
      ead: response_database!.ead,
      nome: response_database!.nome,
      valor: response_database!.valor,
    });
  }
  
  public async getAlunoDisciplina(disciplinaId: number, alunoId: number): Promise<Disciplina> {
    const response_database = await this.prisma.disciplina.findUnique({
      where: {
          id_disciplina: disciplinaId,
          id_aluno: alunoId
        }
    })
    
    return new Disciplina({
      disciplinaId: response_database!.id_disciplina,
      disponivel: response_database!.disponivel,
      ead: response_database!.ead,
      nome: response_database!.nome,
      valor: response_database!.valor,
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
