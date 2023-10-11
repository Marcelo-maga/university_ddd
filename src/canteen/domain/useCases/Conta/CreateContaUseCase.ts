import { AlunoRepository } from "../../../../secretary/infrastructure/repositories/AlunoRepository";
import { ContaRepository } from "../../../infrastructure/repositories/ContaRepository";

export class CreateContaUseCase {
  constructor(
    private readonly alunoRepository: AlunoRepository,
    private readonly contaRepository: ContaRepository
  ) {}

  async execute(alunoId: number) {
    const aluno = await this.alunoRepository.get(alunoId);

    if (!aluno) {
      throw new Error("Aluno não encontrado");
    }

    const aluno_have_conta = await this.contaRepository.get_conta_by_id_aluno(
      alunoId
    );

    if (aluno_have_conta) {
      throw new Error("Aluno já possui uma conta");
    }

    const conta = this.contaRepository.create(alunoId);
    return conta;
  }
}
