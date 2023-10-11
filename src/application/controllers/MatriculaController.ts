import { Request, Response } from "express";
import { MatriculaRepository } from "../../secretary/infrastructure/repositories/MatriculaRepository";
import {
  FazerMatriculaUseCase,
  TrancarMatriculaUseCase,
} from "../../secretary/domain/useCases/matricula";
import { Matricula } from "../../secretary/domain/Matricula";
import {
  RepositoryFactory,
  UseCasesFactory,
} from "../../shared.kernel/factory";

export class MatriculaController {
  private matriculaRepository: MatriculaRepository;
  private fazerMatriculaUseCase: FazerMatriculaUseCase;
  private trancarMatriculaUseCase: TrancarMatriculaUseCase;

  constructor() {
    this.matriculaRepository = RepositoryFactory.createMatriculaRepository();
    this.fazerMatriculaUseCase = UseCasesFactory.createFazerMatriculaUseCase();
    this.trancarMatriculaUseCase = UseCasesFactory.createTrancarMatriculaUseCase();
  }

  async getAllMatriculas(req: Request, res: Response): Promise<Matricula[]> {
    return await this.matriculaRepository.getAll();
  }

  async fazerMatricula(req: Request, res: Response): Promise<Matricula> {
    const matricula: Omit<Matricula, "matriculaId" | "trancado"> = {
      dataCadastro: req.body.dataCadastro,
      dataInicio: req.body.dataInicio,
      previsaoFim: req.body.previsaoFim,
      curso: req.body.curso,
      alunoId: req.body.alunoId,
    };

    return await this.fazerMatriculaUseCase.execute(matricula);
  }

  async trancarMatricula(req: Request, res: Response): Promise<Matricula> {
    return await this.trancarMatriculaUseCase.execute(req.body.matriculaId);
  }
}
