import { Request, Response } from "express";
import { UseCasesFactory } from "../../shared.kernel/factory";

import { Aluno, AtribuirDisciplina } from "../../secretary/domain";
import {
  AlunoRepository,
  DisciplinaRepository,
} from "../../secretary/infrastructure/repositories";

export class AlunoController {
  private alunoRepository: AlunoRepository;
  private disciplinaRepository: DisciplinaRepository;
  private addNewDisc: AtribuirDisciplina;

  constructor() {
    this.alunoRepository = new AlunoRepository();
    this.disciplinaRepository = new DisciplinaRepository();
    this.addNewDisc = UseCasesFactory.createAtribuirDisciplina();
  }

  async getAllAlunos(request: Request, response: Response): Promise<Aluno[]> {
    return await this.alunoRepository.getAll();
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
