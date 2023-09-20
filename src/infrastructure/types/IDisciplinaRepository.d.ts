import Disciplina from "../../domain/Disciplina";

export interface IDisciplinaRepository {
  get: (disciplinaId: number) => Promise<Disciplina | null>;
  getAll: () => Promise<Disciplina[]>;
  getAlunoDisciplina: (disciplinaId: number, alunoId: number) => Promise<Aluno>;
  create: (disciplina: Omit<Disciplina, "disciplinaId">) => Promise<Disciplina>;
  update: (idDisciplina: number, disciplina: Partial<Disciplina>) => Promise<Disciplina>;
}
