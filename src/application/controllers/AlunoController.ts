import { Request, Response } from "express";
import { UseCasesFactory } from "../../shared.kernel/factory";
import { Aluno, AtribuirDisciplina } from "../../secretary/domain";
export class AlunoController {
  private addNewDisc: AtribuirDisciplina;
  private criarAluno = UseCasesFactory.createCriarAluno();
  private obterAluno = UseCasesFactory.createObterAluno();
  private listarAlunos = UseCasesFactory.createListarAlunos();
  private editarAluno = UseCasesFactory.createEditarAluno();
  private deletarAluno = UseCasesFactory.createDeletarAluno();

  constructor() {
    this.addNewDisc = UseCasesFactory.createAtribuirDisciplina();
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

      return await this.criarAluno.execute(aluno);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async get(alunoId: number) {
    try {
      return await this.obterAluno.execute(alunoId);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getAll() {
    try {
      return await this.listarAlunos.execute();
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async update(disciplinaId: number, disciplina: Aluno) {
    try {
      return await this.editarAluno.execute(disciplinaId, disciplina);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async delete(disciplinaId: number) {
    try {
      return await this.deletarAluno.execute(disciplinaId);
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
