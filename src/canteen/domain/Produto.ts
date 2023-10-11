interface ProdutoConstructorProps {
  produto_id: number;
  valor: number;
  descricao: string;
}

export class Produto {
  public produto_id: number;
  public valor: number;
  public descricao: string;

  constructor({ produto_id, valor, descricao }: ProdutoConstructorProps) {
    this.produto_id = produto_id;
    this.valor = valor;
    this.descricao = descricao;
  }
}
