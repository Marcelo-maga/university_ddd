import { ProdutoRepository } from "../../../infrastructure/repositories/ProdutoRepository";
import { Produto } from "../../Produto";

export class CreateProdutoUseCase {
    constructor(
        private readonly produtoRepository: ProdutoRepository
    ) {}

    async execute(produto: Omit<Produto, "produto_id">) {
        const newProduto = this.produtoRepository.create(produto);
        return newProduto;
    }
}