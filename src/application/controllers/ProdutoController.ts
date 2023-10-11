import {
  RepositoryFactory,
  UseCasesFactory,
} from "../../shared.kernel/factory";
import { ProdutoRepository } from "../../canteen/infrastructure/repositories/ProdutoRepository";
import {
  CreateProdutoUseCase,
  DeleteProdutoUseCase,
  GetAllProdutoUseCase,
  GetProdutoUseCase,
  UpdateProdutoUseCase,
} from "../../canteen/domain/useCases/Produto";
import { Produto } from "../../canteen/domain";

export class ProdutoController {
  private produtoRepository: ProdutoRepository;

  private getProdutoUseCase: GetProdutoUseCase;
  private getAllProdutoUseCase: GetAllProdutoUseCase;
  private createProdutoUseCase: CreateProdutoUseCase;
  private updateProdutoUseCase: UpdateProdutoUseCase;
  private deleteProdutoUseCase: DeleteProdutoUseCase;

  constructor() {
    this.produtoRepository = RepositoryFactory.createProdutoRepository();
    this.createProdutoUseCase = UseCasesFactory.createCreateProdutoUseCase();
    this.getProdutoUseCase = UseCasesFactory.createGetProdutoUseCase();
    this.getAllProdutoUseCase = UseCasesFactory.createGetAllProdutoUseCase();
    this.updateProdutoUseCase = UseCasesFactory.createUpdateProdutoUseCase();
    this.deleteProdutoUseCase = UseCasesFactory.createDeleteProdutoUseCase();

  }

  async get(id_produto: number) {
    const produto = await this.getProdutoUseCase.execute(id_produto);
    return produto;
  }

  async getAll() {
    const produtos = await this.getAllProdutoUseCase.execute();
    return produtos;
  }

  async create(produto: Omit<Produto, "id_produto">) {
    const new_produto = await this.createProdutoUseCase.execute(produto);
    return new_produto;
  }

  async update(produto_id: number, produto: Omit<Produto, "id_produto">) {
    const update_produto = await this.updateProdutoUseCase.execute(produto_id, produto);
    return update_produto;
  }

  async delete(produto_id: number) {
    const delete_produto = await this.deleteProdutoUseCase.execute(produto_id);
    return delete_produto;
  }

}
