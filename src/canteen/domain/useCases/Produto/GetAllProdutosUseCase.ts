import { ProdutoRepository } from "../../../infrastructure/repositories/ProdutoRepository";


export class GetAllProdutoUseCase {
    constructor(
        private readonly produtoRepository: ProdutoRepository
    ) {}

    async execute() {
        const produtos = await this.produtoRepository.getAll();
        return produtos;
    }
}