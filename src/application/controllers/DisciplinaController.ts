import { Request, Response } from "express";

import {
  RepositoryFactory,
  UseCasesFactory,
} from "../../shared.kernel/factory";

import { DisciplinaRepository } from "../../secretary/infrastructure/repositories";
import {
  CriarDisciplinaUseCase,
  DeletarDisciplinaUseCase,
  Disciplina,
  EditarDisciplinaUseCase,
  ListarDisciplinasUseCase,
  ObterDisciplinaUserCase,
} from "../../secretary/domain";

export class DisciplinaController {
  private disciplinaRepository: DisciplinaRepository;
  private criarDisciplina: CriarDisciplinaUseCase;
  private obterDisciplina: ObterDisciplinaUserCase;
  private listarDisciplinas: ListarDisciplinasUseCase;
  private editarDisciplina: EditarDisciplinaUseCase;
  private deletarDisciplina: DeletarDisciplinaUseCase;

  constructor() {
    this.disciplinaRepository = RepositoryFactory.createDisciplinaRepository();
    this.criarDisciplina = UseCasesFactory.createCriarDisciplinaUseCase();
    this.obterDisciplina = UseCasesFactory.createObterDisciplinaUseCase();
    this.listarDisciplinas = UseCasesFactory.createListarDisciplinasUseCase();
    this.editarDisciplina = UseCasesFactory.createEditarDisciplinaUseCase();
    this.deletarDisciplina = UseCasesFactory.createDeletarDisciplinaUseCase();
  }

  async create(disciplina: Disciplina) {
    try {
      if (
        !disciplina.disponivel ||
        !disciplina.ead ||
        !disciplina.nome ||
        !disciplina.valor
      ) {
        throw new Error("Preencha todos os dados da disciplina");
      }

      return await this.criarDisciplina.execute(disciplina);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async get(disciplinaId: number) {
    try {
      return await this.obterDisciplina.execute(disciplinaId);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getAll() {
    try {
      return await this.listarDisciplinas.execute();
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async update(disciplinaId: number, disciplina: Disciplina) {
    try {
      return await this.editarDisciplina.execute(disciplinaId, disciplina);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async delete(disciplinaId: number) {
    try {
      return await this.deletarDisciplina.execute(disciplinaId);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
