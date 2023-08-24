import Aluno from "../../domain/Aluno";

export interface IAlunoRepository {
    getAlunos: () => Promise<Aluno[]>;
}