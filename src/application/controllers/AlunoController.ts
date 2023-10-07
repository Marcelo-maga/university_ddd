import { Request, Response } from "express"
import { AlunoRepository } from "../../secretary/infrastructure/repositories/AlunoRepository"
import { DisciplinaRepository } from "../../secretary/infrastructure/repositories/DisciplinaRepository";
import { Aluno, AtribuirDisciplina } from "../../secretary"

export class AlunoController {
    private alunoRepository: AlunoRepository;
    private disciplinaRepository: DisciplinaRepository;
    private addNewDisc: AtribuirDisciplina;

    constructor() { 
        this.alunoRepository = new AlunoRepository()
        this.disciplinaRepository = new DisciplinaRepository()
        this.addNewDisc = new AtribuirDisciplina(this.alunoRepository, this.disciplinaRepository)
    }

    async getAllAlunos(request: Request, response: Response): Promise<Aluno[]> {
        return await this.alunoRepository.getAll()
    }

    async addNewDiscipline(request: Request, response: Response) {
        const { alunoId, disciplinaId } = request.body
        
        try {
            const result = await this.addNewDisc.execute(alunoId, disciplinaId)
            return result
        } catch (error: any) {
            throw error
        }
    }
}