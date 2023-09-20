import { AlunoRepository } from "../infrastructure/repositories/AlunoRepository"
import { DisciplinaRepository } from "../infrastructure/repositories/DisciplinaRepository"

export class addNewDiscipline {
    constructor(
        private readonly alunoRepository: AlunoRepository,
        private readonly disciplinaRepository: DisciplinaRepository

    ) {}

    async execute(alunoId: number, disciplinaId: number) {

        if (!await this.alunoRepository.get(alunoId)){
            return "O código do aluno está errado"
        }
        
        if (!await this.disciplinaRepository.get(disciplinaId)){
            return "O código da disciplina está errado"
        }

        if (await this.disciplinaRepository.getAlunoDisciplina(disciplinaId, alunoId) != null){
            return "O aluno já está matriculado nesta disciplina"
        }

        return await this.alunoRepository.addNewDiscipline(alunoId, disciplinaId)
    }
}
