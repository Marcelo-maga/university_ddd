import { ProdutoRepository } from "../../../infrastructure/repositories/ProdutoRepository";

export class DeleteProdutoUseCase {
    constructor(
        private readonly produtoRepository: ProdutoRepository
    ) {}

    async execute(id_produto: number) {
        const produto = await this.produtoRepository.get(id_produto);

        if (!produto) throw new Error("Produto não encontrado");
        
        await this.produtoRepository.delete(id_produto);
    }
}