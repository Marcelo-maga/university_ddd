import { AlunoRepository } from "../../../infrastructure/repositories";

export class DeletarAlunoUseCase {
  constructor(private readonly alunoRepository: AlunoRepository) {}

  async execute(alunoId: number) {
    const alunoExistente = await this.alunoRepository.get(
      alunoId
    );

    if (!alunoExistente) {
      throw new Error("Aluno não encontrado");
    }

    const alunoDeletada = await this.alunoRepository.delete(
      alunoId
    );

    return alunoDeletada;
  }
}
