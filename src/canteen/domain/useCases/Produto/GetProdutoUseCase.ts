import { ProdutoRepository } from "../../../infrastructure/repositories/ProdutoRepository";


export class GetProdutoUseCase {
    constructor(
        private readonly produtoRepository: ProdutoRepository
    ) {}

    async execute(id_produto: number) {
        const produto = await this.produtoRepository.get(id_produto);
        return produto;
    }
}