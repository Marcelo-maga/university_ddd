import { Produto } from "../../domain/Produto";

export interface IProdutoRepository {
    getAll: () => Promise<Produto[]>;
    get: (ProdutoId: number) => Promise<Produto | null>;
    create: (Produto: Omit<Produto, "ProdutoId">) => Promise<Produto>;
    update: (ProdutoId: number, Produto: Partial<Produto>) => Promise<Produto>;
    delete: (ProdutoId: number) => Promise<Produto>;
}