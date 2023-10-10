import { Request, Response } from "express";
import { UseCasesFactory } from "../../shared.kernel/factory";
import {
  Aluno,
  AtribuirDisciplinaUseCase,
  CriarAlunoUseCase,
  DeletarAlunoUseCase,
  EditarAlunoUseCase,
  ListarAlunosUseCase,
  ObterAlunoUseCase,
} from "../../secretary/domain";
export class AlunoController {
  private addNewDisc: AtribuirDisciplinaUseCase;
  private criarAlunoUseCase: CriarAlunoUseCase;
  private obterAlunoUseCase: ObterAlunoUseCase;
  private listarAlunosUseCase: ListarAlunosUseCase;
  private editarAlunoUseCase: EditarAlunoUseCase;
  private deletarAlunoUseCase: DeletarAlunoUseCase;

  constructor() {
    this.addNewDisc = UseCasesFactory.createAtribuirDisciplinaUseCase();
    this.criarAlunoUseCase = UseCasesFactory.createCriarAlunoUseCase();
    this.obterAlunoUseCase = UseCasesFactory.createObterAlunoUseCase();
    this.listarAlunosUseCase = UseCasesFactory.createListarAlunosUseCase();
    this.editarAlunoUseCase = UseCasesFactory.createEditarAlunoUseCase();
    this.deletarAlunoUseCase = UseCasesFactory.createDeletarAlunoUseCase();
  }

  async create(aluno: Omit<Aluno, "alunoId">) {
    try {
      if (
        !aluno.ativo ||
        !aluno.dataCadastro ||
        !aluno.email ||
        !aluno.nome ||
        !aluno.sobrenome
      ) {
        throw new Error("Preencha todos os dados do aluno");
      }

      return await this.criarAlunoUseCase.execute(aluno);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async get(alunoId: number) {
    try {
      return await this.obterAlunoUseCase.execute(alunoId);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getAll() {
    try {
      return await this.listarAlunosUseCase.execute();
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async update(disciplinaId: number, disciplina: Aluno) {
    try {
      return await this.editarAlunoUseCase.execute(disciplinaId, disciplina);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async delete(disciplinaId: number) {
    try {
      return await this.deletarAlunoUseCase.execute(disciplinaId);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async addNewDiscipline(request: Request, response: Response) {
    const { alunoId, disciplinaId } = request.body;

    try {
      const result = await this.addNewDisc.execute(alunoId, disciplinaId);
      return result;
    } catch (error: any) {
      throw error;
    }
  }
}
