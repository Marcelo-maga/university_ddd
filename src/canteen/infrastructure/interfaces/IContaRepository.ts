import { Conta } from "../../domain/Conta";

export interface IContaRepository {
    create: (id_aluno: number) => Promise<Conta>;
    get_conta_by_id_aluno(id_aluno: number): Promise<Conta | null>;
    get(id_conta: number): Promise<Conta | null>;
    delete(id_conta: number): Promise<Conta | null>;
}