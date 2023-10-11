import { Produto } from "../../domain/Produto";
import { IProdutoRepository } from "../interfaces/IProdutoRepository";
import { createPrismaClient } from "../../../shared.kernel/prisma";

export class ProdutoRepository implements IProdutoRepository {
    private produtos: Produto[] = [];
    private prisma = createPrismaClient();

    public async getAll(): Promise<Produto[]> {
        const response_database = await this.prisma.produto.findMany()

        response_database.forEach(produto => {
            this.produtos.push(
                new Produto({ 
                    produto_id: produto.id_produto,
                    descricao: produto.descricao,
                    valor: produto.valor  
                })
            )
        })

        return this.produtos  
    }

    public async get(id_produto: number): Promise<Produto | null> {
        const response_database = await this.prisma.produto.findUnique({
            where: {
                id_produto: id_produto
            }
        })

        if (!response_database) return null

        return new Produto({
            produto_id: response_database!.id_produto,
            descricao: response_database!.descricao,
            valor: response_database!.valor
        })
    }

    public async create(new_produto: Omit<Produto, "produto_id">): Promise<Produto> {
        const response_database = await this.prisma.produto.create({
            data: {
                descricao: new_produto.descricao,
                valor: new_produto.valor,
            }
        })

        return new Produto({
            produto_id: response_database.id_produto,
            descricao: response_database.descricao,
            valor: response_database.valor
        })
    }

    public async update(id_produto: number, update_produto: Partial<Produto>): Promise<Produto> {
        const response_database = await this.prisma.produto.update({
            where: {
                id_produto: id_produto
            },
            data: {
                descricao: update_produto.descricao,
                valor: update_produto.valor
            }
        })

        return new Produto({
            produto_id: response_database.id_produto,
            descricao: response_database.descricao,
            valor: response_database.valor
        })
    }

    public async delete(id_produto: number): Promise<Produto> {
        const response_database = await this.prisma.produto.delete({
            where: {
                id_produto: id_produto
            }
        })

        return new Produto({
            produto_id: response_database.id_produto,
            descricao: response_database.descricao,
            valor: response_database.valor
        })
    }

}