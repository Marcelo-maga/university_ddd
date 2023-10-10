import { Pagamento } from "../../domain/Pagamento";
import { createPrismaClient } from "../../../shared.kernel/prisma";
import { IPagamentoRepository } from "../interfaces/IPagementoRepository";

export class PagamentoRepository implements IPagamentoRepository {
    private prisma = createPrismaClient();

    public async fechar_pagamento(id_conta: number, valor: number): Promise<Pagamento> {
        const response_database = await this.prisma.pagamento.create({
            data: {
                id_conta: id_conta,
                valor: valor
            }
        })

        return new Pagamento({
            id_pagamento: response_database.id_pagamento,
            id_conta: response_database.id_conta,
            data_pagamento: response_database.data_pagamento,
            valor: response_database.valor
        })
    }
}