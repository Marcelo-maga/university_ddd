import { Request, Response } from "express"
import { AlunoRepository } from "../../infrastructure/repositories/AlunoRepository"
import Aluno from "../../domain/Aluno";

export class AlunoContoller {
    private alunoRepository: AlunoRepository;

    constructor() { 
        this.alunoRepository = new AlunoRepository()
    }

    async getAllAlunos(request: Request, response: Response): Promise<Aluno[]> {
        return await this.alunoRepository.getAlunos()
    }
}