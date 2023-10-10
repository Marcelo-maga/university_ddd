import { MatriculaRepository } from "../../../infrastructure/repositories/MatriculaRepository";

export class TrancarMatriculaUseCase {
  constructor(private readonly matriculaRepository: MatriculaRepository) {}

  async execute(matriculaId: number) {
    const matricula = await this.matriculaRepository.get(matriculaId);


      if (matricula?.trancado == true) {
        throw new Error("Aluno já está com a matrícula trancada");
      }

    const newMatricula = this.matriculaRepository.update(matriculaId, {
      trancado: true,
    });

    return newMatricula;
  }
}
