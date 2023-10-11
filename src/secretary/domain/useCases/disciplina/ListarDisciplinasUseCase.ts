import { DisciplinaRepository } from "../../../infrastructure/repositories";

export class ListarDisciplinasUseCase {
  constructor(private readonly disciplinaRepository: DisciplinaRepository) {}

  async execute() {
    const disciplinas = await this.disciplinaRepository.getAll();

    return disciplinas;
  }
}
