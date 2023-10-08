import { Request, Response } from "express";
import { MatriculaRepository } from "../../secretary/matricula/infrastructure/repositories/MatriculaRepository";
import { Matricula, FazerMatricula } from "../../secretary/matricula";

export class MatriculaController {
  private matriculaRepository: MatriculaRepository;
  private fazerMatricula: FazerMatricula;

  constructor() {
    this.matriculaRepository = new MatriculaRepository();
    this.fazerMatricula = new FazerMatricula();
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
    }();

    return await this.fazerMatricula.execute(matricula);
  }
}
