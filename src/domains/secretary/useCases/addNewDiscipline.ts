import { AlunoRepository } from "../../infrastructure/repositories/AlunoRepository"
import { DisciplinaRepository } from "../../infrastructure/repositories/DisciplinaRepository"

export class addNewDiscipline {
    constructor(
        private readonly alunoRepository: AlunoRepository,
        private readonly disciplinaRepository: DisciplinaRepository
    ) {}

    async execute(alunoId: number, disciplinaId: number) {
        const aluno = await this.alunoRepository.get(alunoId)
        const disciplina = await this.disciplinaRepository.get(disciplinaId)

        if (!aluno){
            throw new Error("O Aluno não existe")
        }
        
        if (!disciplina){
            throw new Error("A disciplina não existe")
        }
        
        if (aluno.disciplinas?.find(disciplina => disciplina.disciplinaId === disciplinaId)) {
            throw new Error("Aluno ja está cadastrado nesse disciplina")
        }

        const newAluno = await this.alunoRepository.addNewDiscipline(alunoId, disciplinaId)
    
        return newAluno
    }
}
