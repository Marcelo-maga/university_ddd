import { AlunoRepository } from "../../../infrastructure/repositories";
import { Aluno } from "../../Aluno";

export class CriarAluno {
  constructor(private readonly alunoRepository: AlunoRepository) {}
  async execute(aluno: Omit<Aluno, "alunoId">) {
    // O nome do aluno não pode ser duplicado
    const alunoExistente = await this.alunoRepository.get(
      undefined,
      aluno.email
    );

    if (alunoExistente) {
      throw new Error("Já existe um aluno com esse e-mail");
    }

    const newAluno = await this.alunoRepository.create(aluno);
    return newAluno;
  }
}
