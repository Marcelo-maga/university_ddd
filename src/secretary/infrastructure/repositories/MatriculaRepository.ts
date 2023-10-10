import { createPrismaClient } from "../../../shared.kernel/prisma";
import { Matricula } from "../../domain/Matricula";
import { IMatriculaRepository } from "../interfaces/IMatriculaRepository";

export class MatriculaRepository implements IMatriculaRepository {
  private matriculas: Matricula[] = [];
  private prisma = createPrismaClient();

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
          trancado: matricula.trancado,
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
      trancado: response_database!.trancado,
      alunoId: response_database!.id_aluno,
    });
  }

  public async getMatriculaByAluno(
    alunoId: number
  ): Promise<Matricula[] | null> {
    const response_database = await this.prisma.matricula.findMany({
      where: {
        id_aluno: alunoId,
      },
    });
    response_database.forEach((matricula) => {
      this.matriculas.push(
        new Matricula({
          matriculaId: matricula.id_matricula,
          dataCadastro: matricula.data_cadastro,
          dataInicio: matricula.data_inicio,
          previsaoFim: matricula.previsao_fim,
          curso: matricula.curso,
          trancado: matricula.trancado,
          alunoId: matricula.id_aluno,
        })
      );
    });

    return this.matriculas;
  }

  public async create(
    matricula: Omit<Matricula, "matriculaId" | "trancado">
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
      trancado: response_database!.trancado,
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
      trancado: response_database!.trancado,
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
      trancado: response_database!.trancado,
      alunoId: response_database.id_aluno,
    });
  }
}
