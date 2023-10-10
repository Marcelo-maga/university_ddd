import { AlunoRepository } from "../../../infrastructure/repositories";

export class ListarAlunosUseCase {
  constructor(private readonly alunoRepository: AlunoRepository) {}

  async execute() {
    const alunos = await this.alunoRepository.getAll();

    return alunos;
  }
}
