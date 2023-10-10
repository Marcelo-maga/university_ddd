import { DisciplinaRepository } from "../../../infrastructure/repositories";
import { Disciplina } from "../../Disciplina";

export class EditarDisciplinaUseCase {
  constructor(private readonly disciplinaRepository: DisciplinaRepository) {}

  async execute(disciplinaId: number, disciplina: Disciplina) {
    const disciplinaExistente = await this.disciplinaRepository.get(
      disciplinaId
    );

    if (!disciplinaExistente) {
      throw new Error("Disciplina não encontrada");
    }

    const disciplinaAtualizada = await this.disciplinaRepository.update(
      disciplinaId,
      disciplina
    );

    return disciplinaAtualizada;
  }
}