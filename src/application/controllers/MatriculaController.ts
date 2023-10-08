import { Request, Response } from "express";
import { MatriculaRepository } from "../../secretary/matricula/infrastructure/repositories/MatriculaRepository";
import {
  Matricula,
  FazerMatricula,
  TrancarMatricula,
} from "../../secretary/matricula";

export class MatriculaController {
  private matriculaRepository: MatriculaRepository;
  private fazerMatricula: FazerMatricula;
  private trancarMatricula: TrancarMatricula;

  constructor() {
    this.matriculaRepository = new MatriculaRepository();
    this.fazerMatricula = new FazerMatricula();
    this.trancarMatricula = new TazerMatricula();
  }

  async getAllMatriculas(
    request: Request,
    response: Response
  ): Promise<Matricula[]> {
    return await this.matriculaRepository.getAll();
  }

  async fazerMatricula(
    request: Request,
    response: Response
  ): Promise<Matricula> {
    const matricula: Matricula = {
      dataCadastro: req.body.dataCadastro,
      dataInicio: req.body.dataInicio,
      previsaoFim: req.body.previsaoFim,
      curso: req.body.curso,
      alunoId: req.body.alunoId,
    };

    return await this.fazerMatricula.execute(matricula);
  }

  async trancarMatricula(
    request: Request,
    response: Response
  ): Promise<Matricula> {
    return await this.trancarMatricula.execute(req.body.matriculaId);
  }
}
