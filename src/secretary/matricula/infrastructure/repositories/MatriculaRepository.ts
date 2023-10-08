import { matricula } from "../../domains/matricula";
import { IMatriculaRepository } from "../interfaces/IMatriculaRepository";
import { createPrismaClient } from "../../../../shared.kernel/prisma";

export class MatriculaRepository implements IMatriculaRepository {
  private matriculas: Matricula[] = [];
  private prisma = createPrismaClient();

  // TODO: implementar retorno do banco de dados
  // TODO: popular o banco de dados
  public async getAll(): Promise<Matricula[]> {
    const response_database = await this.prisma.matricula.findMany();

    response_database.forEach((matricula) => {
      this.matriculas.push(
        new Matricula({
          matriculaId: matricula.id_matricula,
          dataCadastro: matricula.data_cadastro,
          dataInicio: matricula.data_inicio,
          previsaoFim: matricula.previsao_fim,
          curso: matricula.curso,
          alunoId: matricula.id_aluno,
        })
      );
    });

    return this.matriculas;
  }

  public async get(matriculaId: number): Promise<Matricula | null> {
    const response_database = await this.prisma.matricula.findUnique({
      where: {
        id_matricula: matriculaId,
      },
    });

    if (!response_database) return null;

    return new Matricula({
      matriculaId: response_database!.id_matricula,
      dataCadastro: response_database!.data_cadastro,
      dataInicio: response_database!.data_inicio,
      previsaoFim: response_database!.previsao_fim,
      curso: response_database!.curso,
      alunoId: response_database!.id_aluno,
    });
  }

  /** */
  public async create(
    matricula: Omit<Matricula, "matriculaId">
  ): Promise<Matricula> {
    const response_database = await this.prisma.matricula.create({
      data: {
        data_cadastro: matricula.dataCadastro,
        data_inicio: matricula.dataInicio,
        previsao_fim: matricula.previsaoFim,
        curso: matricula.curso,
        aluno: {
          connect: {
            id_aluno: matricula.alunoId,
          },
        },
      },
    });

    return new Matricula({
      matriculaId: response_database.id_matricula,
      dataCadastro: response_database.data_cadastro,
      dataInicio: response_database.data_inicio,
      previsaoFim: response_database.previsao_fim,
      curso: response_database.curso,
      alunoId: response_database.id_aluno,
    });
  }

  public async update(
    matriculaId: number,
    matricula: Partial<Matricula>
  ): Promise<Matricula> {
    const response_database = await this.prisma.matricula.update({
      where: {
        id_matricula: matriculaId,
      },
      data: {
        data_cadastro: matricula.dataCadastro,
        data_inicio: matricula.dataInicio,
        previsao_fim: matricula.previsaoFim,
        curso: matricula.curso,
      },
    });

    return new Matricula({
      matriculaId: response_database.id_matricula,
      dataCadastro: response_database.data_cadastro,
      dataInicio: response_database.data_inicio,
      previsaoFim: response_database.previsao_fim,
      curso: response_database.curso,
      alunoId: response_database.id_aluno,
    });
  }

  public async delete(matriculaId: number): Promise<Matricula> {
    const response_database = await this.prisma.matricula.delete({
      where: {
        id_matricula: matriculaId,
      },
    });

    return new Matricula({
      matriculaId: response_database.id_matricula,
      dataCadastro: response_database.data_cadastro,
      dataInicio: response_database.data_inicio,
      previsaoFim: response_database.previsao_fim,
      curso: response_database.curso,
      alunoId: response_database.id_aluno,
    });
  }
}
