import Disciplina from "../../domain/Disciplina";

export interface IDisciplinaRepository {
  get: () => Promise<Disciplina>;
  getAll: () => Promise<Disciplina[]>;
  create: (disciplina: Omit<Disciplina, "disciplinaId">) => Promise<Disciplina>;
  update: (idDisciplina: number, disciplina: Partial<Disciplina>) => Promise<Disciplina>;
}
