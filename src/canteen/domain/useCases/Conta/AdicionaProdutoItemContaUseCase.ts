import { ContaRepository } from "../../../infrastructure/repositories/ContaRepository";
import { ProdutoRepository } from "../../../infrastructure/repositories/ProdutoRepository";

export class AdicionaProdutoItemContaUseCase {
  constructor(
    private readonly produtoRepository: ProdutoRepository,
    private readonly contaRepository: ContaRepository
  ) {}

  async execute(id_produto: number, id_conta: number) {
    const produto = await this.produtoRepository.get(id_produto);
    const conta = await this.contaRepository.get(id_conta);

    if (!produto) throw new Error("Produto não encontrado");
    if (!conta) throw new Error("Conta não encontrada");

    // verificar se não tem uma conta com o status true, se não tiver cria uma novo item se não atualiza a conta aberta

    const id_itemConta = await this.contaRepository.get_open_item_conta(
      id_conta
    );

    if (!id_itemConta) {
      const id_itemConta = await this.contaRepository.create_item_conta(id_conta);
      if (!id_itemConta) throw new Error("Erro ao criar item conta");
      const response = await this.contaRepository.adiciona_produto_item_conta(
        id_produto,
        id_itemConta
      );
      return response
      
    } else {
      const response = await this.contaRepository.adiciona_produto_item_conta(
        id_produto,
        id_itemConta.id_itemConta
      );
      return response

    }

  }
}
