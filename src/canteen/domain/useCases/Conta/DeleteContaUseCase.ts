import { ContaRepository } from "../../../infrastructure/repositories/ContaRepository";

export class DeleteContaUseCase {
  constructor(private readonly contaRepository: ContaRepository) {}

  async execute(id_conta: number) {
    const conta = await this.contaRepository.get(id_conta);

    if (!conta) {
      throw new Error("Conta não encontrada");
    }

    const conta_deleted = await this.contaRepository.delete(id_conta);
    return conta_deleted;
  }
}
