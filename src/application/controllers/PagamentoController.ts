import { Request, Response } from "express";
import { PagamentoRepository } from "../../canteen/infrastructure/repositories/PagamentoRepository";
import { Pagamento } from "../../canteen/domain/Pagamento";
import { RepositoryFactory, UseCasesFactory } from "../../shared.kernel/factory";
import { FecharPagamentoUseCase } from "../../canteen/domain/useCases/Pagamento"

export class PagamentoController {
  private pagamentoRepository: PagamentoRepository;
  private fecharPagamentoUseCase: FecharPagamentoUseCase;

  constructor() {
    this.pagamentoRepository = RepositoryFactory.createPagamentoRepository();
    this.fecharPagamentoUseCase = UseCasesFactory.createFecharPagamentoUseCase();
  }

  async fechaPagamento(req: Request, res: Response) {
  }

}
