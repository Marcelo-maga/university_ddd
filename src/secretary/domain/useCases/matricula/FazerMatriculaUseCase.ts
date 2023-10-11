import { MatriculaRepository } from "../../../infrastructure/repositories/MatriculaRepository";
import { Matricula } from "../../Matricula";

export class FazerMatriculaUseCase {
  constructor(private readonly matriculaRepository: MatriculaRepository) {}

  async execute(matricula: Omit<Matricula, "matriculaId" | "trancado">) {
    const alunoMatriculas = await this.matriculaRepository.getMatriculaByAluno(
      matricula.alunoId
    );
    if (alunoMatriculas)
      for (const alunoMatricula of alunoMatriculas) {
        if (alunoMatricula.curso == matricula.curso) {
          throw new Error("Aluno já matriculado no curso");
        }
      }

    const newMatricula = this.matriculaRepository.create(matricula);
    return newMatricula;
  }
}
