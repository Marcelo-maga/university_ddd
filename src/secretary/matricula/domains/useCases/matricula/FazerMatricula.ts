import { MatriculaRepository } from "../../../infrastructure/repositories/MatriculaRepository";
import { Matricula } from "../../Matricula";

export class FazerMatricula {
  constructor(private readonly matriculaRepository: MatriculaRepository) {}

  async execute(matricula: Matricula) {
    const alunoMatriculas = this.matriculaRepository.getMatriculaByAluno(
      matricula.alunoId
    );

    for (const alunoMatricula of alunoMatriculas) {
      if (alunoMatricula.curso == matricula.curso) {
        throw new Error("Aluno já matriculado no curso");
      }
    }

    const newMatricula = this.matriculaRepository.create(matricula);
  }
}
