import { Aluno } from "../../domains/secretary";

export interface IAlunoRepository {
    getAll: () => Promise<Aluno[]>;
    get: (alunoId: number) => Promise<Aluno | null>;
    create: (Aluno: Omit<Aluno, "AlunoId">) => Promise<Aluno>;
    update: (alunoId: number, Aluno: Partial<Aluno>) => Promise<Aluno>;
    delete: (alunoId: number) => Promise<Aluno>;

    addNewDiscipline: (alunoId: number, disciplinaId: number) => Promise<Aluno>;
}