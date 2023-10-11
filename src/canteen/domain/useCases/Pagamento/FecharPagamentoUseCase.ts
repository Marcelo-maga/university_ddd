import { ContaRepository } from "../../../infrastructure/repositories/ContaRepository";
import { PagamentoRepository } from "../../../infrastructure/repositories/PagamentoRepository";

export class FecharPagamentoUseCase {
  constructor(
    private readonly contaRepository: ContaRepository,
    private readonly pagamentoRepository: PagamentoRepository
  ) {}

  async execute(id_conta: number) {
    const itemConta = await this.contaRepository.get_open_item_conta(id_conta);

    if (!itemConta) throw new Error("Conta não encontrada");

    const pagamento = await this.pagamentoRepository.fechar_pagamento(
      id_conta,
      itemConta.valor_total
    );

    return pagamento;
  }
}
