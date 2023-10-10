import { AlunoRepository } from "../../../infrastructure/repositories";

export class ObterAlunoUseCase {
  constructor(private readonly alunoRepository: AlunoRepository) {}

  async execute(alunoId: number) {
    const aluno = await this.alunoRepository.get(alunoId);

    if (!aluno) {
      throw new Error("Aluno não encontrada");
    }

    return aluno;
  }
}
