import { DisciplinaRepository } from "../../../../infrastructure/repositories";

export class ListarDisciplinas {
  constructor(private readonly disciplinaRepository: DisciplinaRepository) {}

  async execute() {
    const disciplinas = await this.disciplinaRepository.getAll();

    return disciplinas;
  }
}
