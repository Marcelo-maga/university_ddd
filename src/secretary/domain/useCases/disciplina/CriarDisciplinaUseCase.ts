import { DisciplinaRepository } from "../../../infrastructure/repositories";
import { Disciplina } from "../../Disciplina";

export class CriarDisciplinaUseCase {
  constructor(private readonly disciplinaRepository: DisciplinaRepository) {}
  async execute(disciplina: Disciplina) {
    // O nome da disciplina não pode ser duplicado
    const disciplinaExistente = await this.disciplinaRepository.get(
      undefined,
      disciplina.nome
    );

    if (disciplinaExistente) {
      throw new Error("Já existe uma disciplina com esse nome");
    }

    const newDisciplina = await this.disciplinaRepository.create(disciplina);
    return newDisciplina;
  }
}
