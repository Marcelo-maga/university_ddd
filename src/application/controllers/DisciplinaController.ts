import { Request, Response } from "express";
import { DisciplinaRepository } from "../../infrastructure/repositories/DisciplinaRepository";
import {
  RepositoryFactory,
  UseCasesFactory,
} from "../../shared.kernel/factory";
import { CriarDisciplina, DeletarDisciplina, Disciplina, EditarDisciplina, ListarDisciplinas, ObterDisciplina } from "../../domains/secretary";

export class DisciplinaController {
  private disciplinaRepository: DisciplinaRepository;
  private criarDisciplina: CriarDisciplina;
  private obterDisciplina: ObterDisciplina;
  private listarDisciplinas: ListarDisciplinas;
  private editarDisciplina: EditarDisciplina;
  private deletarDisciplina: DeletarDisciplina;

  constructor() {
    this.disciplinaRepository = RepositoryFactory.createDisciplinaRepository();
    this.criarDisciplina = UseCasesFactory.createCriarDisciplina();
    this.obterDisciplina = UseCasesFactory.createObterDisciplina();
    this.listarDisciplinas = UseCasesFactory.createListarDisciplinas();
    this.editarDisciplina = UseCasesFactory.createEditarDisciplina();
    this.deletarDisciplina = UseCasesFactory.createDeletarDisciplina();
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
