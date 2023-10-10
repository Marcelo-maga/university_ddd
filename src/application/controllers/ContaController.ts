import { Request, Response } from "express";
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

  async adicionaProdutoItemConta(req: Request, res: Response) {
    
  }

  async createConta(req: Request, res: Response): Promise<Conta> {
    
  }

  async deleteConta(req: Request, res: Response): Promise<Conta> {
    
  }

}
