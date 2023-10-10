import { DisciplinaRepository } from "../../../infrastructure/repositories";

export class DeletarDisciplinaUseCase {
  constructor(private readonly disciplinaRepository: DisciplinaRepository) {}

  async execute(disciplinaId: number) {
    const disciplinaExistente = await this.disciplinaRepository.get(
      disciplinaId
    );

    if (!disciplinaExistente) {
      throw new Error("Disciplina não encontrada");
    }

    const disciplinaDeletada = await this.disciplinaRepository.delete(
      disciplinaId
    );

    return disciplinaDeletada;
  }
}
