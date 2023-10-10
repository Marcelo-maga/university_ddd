import { DisciplinaRepository } from "../../../infrastructure/repositories";

export class ObterDisciplinaUserCase {
  constructor(private readonly disciplinaRepository: DisciplinaRepository) {}

  async execute(disciplinaId: number) {
    const disciplina = await this.disciplinaRepository.get(disciplinaId);

    if (!disciplina) {
      throw new Error("Disciplina não encontrada");
    }

    return disciplina;
  }
}