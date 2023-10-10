import { IAlunoRepository } from "../interfaces/IAlunoRepository";
import { createPrismaClient } from "../../../shared.kernel/prisma";
import { Aluno } from "../../domain";


export class AlunoRepository implements IAlunoRepository {
  private alunos: Aluno[] = [];
  private prisma = createPrismaClient();

  // TODO: implementar retorno do banco de dados
  // TODO: popular o banco de dados
  public async getAll(): Promise<Aluno[]> {
    const response_database = await this.prisma.aluno.findMany();

    response_database.forEach((aluno) => {
      this.alunos.push(
        new Aluno({
          alunoId: aluno.id_aluno,
          nome: aluno.nome,
          sobrenome: aluno.sobreNome,
          email: aluno.email,
          dataCadastro: aluno.dataCadastro,
          ativo: aluno.ativo,
        })
      );
    });

    return this.alunos;
  }

  public async get(alunoId?: number, email?: string): Promise<Aluno | null> {
    const response_database = await this.prisma.aluno.findUnique({
      where: {
        id_aluno: alunoId,
        ...(email && { email })
      },
    });

    if (!response_database) return null;

    return new Aluno({
      alunoId: response_database!.id_aluno,
      nome: response_database!.nome,
      sobrenome: response_database!.sobreNome,
      ativo: response_database!.ativo,
      dataCadastro: response_database!.dataCadastro,
      email: response_database!.email,
    });
  }

  /** */
  public async create(aluno: Omit<Aluno, "alunoId">): Promise<Aluno> {
    const response_database = await this.prisma.aluno.create({
      data: {
        nome: aluno.nome,
        sobreNome: aluno.sobrenome,
        email: aluno.email,
        dataCadastro: aluno.dataCadastro,
        ativo: aluno.ativo,
      },
    });

    return new Aluno({
      alunoId: response_database.id_aluno,
      nome: response_database.nome,
      sobrenome: response_database.sobreNome,
      email: response_database.email,
      dataCadastro: response_database.dataCadastro,
      ativo: response_database.ativo,
    });
  }

  public async update(alunoId: number, aluno: Partial<Aluno>): Promise<Aluno> {
    const response_database = await this.prisma.aluno.update({
      where: {
        id_aluno: alunoId,
      },
      data: {
        nome: aluno.nome,
        sobreNome: aluno.sobrenome,
        email: aluno.email,
        dataCadastro: aluno.dataCadastro,
        ativo: aluno.ativo,
      },
    });

    return new Aluno({
      alunoId: response_database.id_aluno,
      nome: response_database.nome,
      sobrenome: response_database.sobreNome,
      email: response_database.email,
      dataCadastro: response_database.dataCadastro,
      ativo: response_database.ativo,
    });
  }

  public async delete(alunoId: number): Promise<Aluno> {
    const response_database = await this.prisma.aluno.delete({
      where: {
        id_aluno: alunoId,
      },
    });

    return new Aluno({
      alunoId: response_database.id_aluno,
      nome: response_database.nome,
      sobrenome: response_database.sobreNome,
      email: response_database.email,
      dataCadastro: response_database.dataCadastro,
      ativo: response_database.ativo,
    });
  }

  public async addNewDiscipline(
    alunoId: number,
    disciplinaId: number
  ): Promise<Aluno> {
    const response_database = await this.prisma.aluno.update({
      where: {
        id_aluno: alunoId,
      },
      data: {
        disciplinas: {
          connect: {
            id_disciplina: disciplinaId,
          },
        },
      },
      include: {
        disciplinas: true,
      },
    });

    return new Aluno({
      alunoId: response_database.id_aluno,
      nome: response_database.nome,
      sobrenome: response_database.sobreNome,
      email: response_database.email,
      dataCadastro: response_database.dataCadastro,
      ativo: response_database.ativo,
      disciplinas: response_database.disciplinas,
    });
  }
}
