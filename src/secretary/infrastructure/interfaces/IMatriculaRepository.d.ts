import Matricula from "../../domain/Matricula";

export interface IMatriculaRepository {
  getAll: () => Promise<Matricula>;
  get: (matriculaId: number) => Promise<Matricula | null>;
  getMatriculaByAluno: (alunoId: number) => Promise<Matricula | null>;
  create: (Matricula: Omit<Matricula, "matriculaId" | "trancado">) => Promise<Matricula>;
  update: (
    matriculaId: number,
    Matricula: Partial<Matricula>
  ) => Promise<Matricula>;
  delete: (matriculaId: number) => Promise<Matricula>;
}
