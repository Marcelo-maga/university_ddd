import { AlunoRepository } from "../../../infrastructure/repositories";
import { Aluno } from "../../Aluno";

export class EditarAluno {
  constructor(private readonly alunoRepository: AlunoRepository) {}

  async execute(alunoId: number, aluno: Aluno) {
    const alunoExistente = await this.alunoRepository.get(
      alunoId
    );

    if (!alunoExistente) {
      throw new Error("Aluno não encontrado");
    }

    const alunoAtualizada = await this.alunoRepository.update(
      alunoId,
      aluno
    );

    return alunoAtualizada;
  }
}