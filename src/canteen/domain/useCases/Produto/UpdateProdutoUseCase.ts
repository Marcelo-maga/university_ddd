import { ProdutoRepository } from "../../../infrastructure/repositories/ProdutoRepository";
import { Produto } from "../../Produto";


export class UpdateProdutoUseCase {
    constructor(
        private readonly produtoRepository: ProdutoRepository
    ) {}

    async execute(id_produto: number, produto: Produto) {
        const produtoExistente = await this.produtoRepository.get(id_produto);

        if (!produtoExistente) {
            throw new Error("Produto não encontrado");
        }

        const produtoAtualizado = await this.produtoRepository.update(
            id_produto,
            produto
        );

        return produtoAtualizado;

    }
}