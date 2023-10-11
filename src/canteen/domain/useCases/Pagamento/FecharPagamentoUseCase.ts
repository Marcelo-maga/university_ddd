import { ContaRepository } from "../../../infrastructure/repositories/ContaRepository";
import { PagamentoRepository } from "../../../infrastructure/repositories/PagamentoRepository";

export class FecharPagamentoUseCase {
  constructor(
    private readonly contaRepository: ContaRepository,
    private readonly pagamentoRepository: PagamentoRepository
  ) {}

  async execute(id_conta: number) {
    const itemConta = await this.contaRepository.get_open_item_conta(id_conta);

    if (!itemConta) return false;

    const pagamento = await this.pagamentoRepository.fechar_pagamento(
      itemConta.id_itemConta,
      itemConta.valor_total
    );

    return pagamento;
  }
}
