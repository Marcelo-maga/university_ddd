import { Request, Response } from "express";
import { CriarDisciplina } from "../../domains/secretary/useCases/disciplina/Criar";
import { DisciplinaRepository } from "../../infrastructure/repositories/DisciplinaRepository";
import {
  RepositoryFactory,
  UseCasesFactory,
} from "../../shared.kernel/factory";
import { Disciplina } from "../../domains/secretary";
import { ObterDisciplina } from "../../domains/secretary/useCases/disciplina/ObterDisciplina";
import { ListarDisciplinas } from "../../domains/secretary/useCases/disciplina/ListarDisciplinas";

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
}
