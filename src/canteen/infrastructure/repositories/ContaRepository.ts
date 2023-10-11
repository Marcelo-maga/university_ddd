import { createPrismaClient } from "../../../shared.kernel/prisma";
import { Conta } from "../../domain/Conta";
import { IContaRepository } from "../interfaces/IContaRepository";

export class ContaRepository implements IContaRepository {
    private prisma = createPrismaClient();
    
    public async create(id_aluno: number): Promise<Conta> {
        const response_database = await this.prisma.conta.create({
            data: {
                id_aluno: id_aluno,
                numero_conta: Math.floor(Math.random() * 1000000000),   
            }
        })

        return new Conta({
            id_conta: response_database.id_conta,
            id_aluno: response_database.id_aluno,
            data_criação: response_database.data_criacao,
            numero_conta: response_database.numero_conta,
        })
    }

    public async get_conta_by_id_aluno(id_aluno: number): Promise<Conta | null> {
        const response_database = await this.prisma.conta.findFirst({
            where: {
                id_aluno: id_aluno,
            },
            include: {
                user: true
            }
        })

        if(!response_database) return null

        return new Conta({
            id_conta: response_database.id_conta,
            id_aluno: response_database.id_aluno,
            data_criação: response_database.data_criacao,
            numero_conta: response_database.numero_conta,
        })
    }
    
    public async get(id_conta: number): Promise<Conta | null> {
        const response_database = await this.prisma.conta.findFirst({
            where: {
                id_conta: id_conta,
            },
            include: {
                user: true
            }
        })

        if(!response_database) return null

        return new Conta({
            id_conta: response_database.id_conta,
            id_aluno: response_database.id_aluno,
            data_criação: response_database.data_criacao,
            numero_conta: response_database.numero_conta,
        })
    }

    public async delete(id_conta: number): Promise<Conta | null> {
        const response_database = await this.prisma.conta.delete({
            where: {
                id_conta: id_conta,
            }
        })

        if(!response_database) return null

        return new Conta({
            id_conta: response_database.id_conta,
            id_aluno: response_database.id_aluno,
            data_criação: response_database.data_criacao,
            numero_conta: response_database.numero_conta,
        })
    }

    public async adiciona_produto_item_conta(id_produto: number, id_itemConta: number): Promise<boolean> {
        const response_database = await this.prisma.itemConta.update({
            where: {
                id_itemConta: id_itemConta,
                status: true,
            },
            data: {
                produtos: {
                    connect: {
                        id_produto: id_produto,
                    }
                }
            }
        })

        if(!response_database) return false

        return true

    }

    public async create_item_conta(id_conta: number): Promise<number | null> {
        const response_database = await this.prisma.itemConta.create({
            data: {
                id_conta: id_conta,
                status: true,
            }
        })

        if(!response_database) return null

        return response_database.id_itemConta
    }

    public async get_open_item_conta(id_conta: number): Promise<{ id_itemConta: number, valor_total:number } | null> {
        const response_database = await this.prisma.itemConta.findFirst({
            where: {
                id_conta: id_conta,
                status: true,
            },
            include: {
                produtos: true
            }
        })

        if(!response_database) return null

        let valor_total = 0

        response_database.produtos.map((item) => {
            valor_total += item.valor
        })

        return {id_itemConta: response_database.id_itemConta, valor_total}
    }

    public async close_item_conta(id_itemConta: number): Promise<boolean> {
        const response_database = await this.prisma.itemConta.update({
            where: {
                id_itemConta: id_itemConta,
            },
            data: {
                status: false,
            }
        })

        if(!response_database) return false

        return true
    }

}