import { ContaRepository } from "../../canteen/infrastructure/repositories/ContaRepository";
import { Conta } from "../../canteen/domain/Conta";
import { CreateContaUseCase, DeleteContaUseCase, AdicionaProdutoItemContaUseCase } from '../../canteen/domain/useCases/Conta'
import {
    RepositoryFactory,
    UseCasesFactory
} from "../../shared.kernel/factory";

export class ContaController {
  private contaRepository: ContaRepository;
  private createContaUseCase: CreateContaUseCase;
  private deleteContaUseCase: DeleteContaUseCase;
  private adicionaProdutoItemContaUseCase: AdicionaProdutoItemContaUseCase;

  constructor() {
    this.contaRepository = RepositoryFactory.createContaRepository();
    this.createContaUseCase = UseCasesFactory.createCreateContaUseCase();
    this.deleteContaUseCase = UseCasesFactory.createDeletaContaUseCase();
    this.adicionaProdutoItemContaUseCase = UseCasesFactory.createAdicionarProdutoItemContaUseCase()
  }

  async adicionaProdutoItemConta(id_conta:number, id_produto:number) {
    const conta = await this.adicionaProdutoItemContaUseCase.execute(id_conta, id_produto);
    return conta;
  }

  async createConta(id_aluno: number): Promise<Conta> {
    const nova_conta = await this.createContaUseCase.execute(id_aluno);
    return nova_conta;
  }

  async deleteConta(id_aluno: number): Promise<Conta | null> {
    const delete_conta = await this.deleteContaUseCase.execute(id_aluno);
    return delete_conta;
  }

}
