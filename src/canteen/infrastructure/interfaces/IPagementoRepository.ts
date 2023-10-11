import { Pagamento } from "../../domain/Pagamento";

export interface IPagamentoRepository {
    fechar_pagamento: (id_conta: number, valor: number) => Promise<Pagamento>;
}