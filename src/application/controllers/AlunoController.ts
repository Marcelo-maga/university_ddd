import { Request, Response } from "express"
import { AlunoRepository } from "../../infrastructure/repositories/AlunoRepository"
import Aluno from "../../domain/Aluno";

export class AlunoController {
    private alunoRepository: AlunoRepository;

    constructor() { 
        this.alunoRepository = new AlunoRepository()
    }

    async getAllAlunos(request: Request, response: Response): Promise<Aluno[]> {
        return await this.alunoRepository.getAll()
    }

    async addNewDiscipline(request: Request, response: Response): Promise<Aluno> {
        const { alunoId, disciplinaId } = request.body
        return await this.alunoRepository.addNewDiscipline(alunoId, disciplinaId)
    }
}