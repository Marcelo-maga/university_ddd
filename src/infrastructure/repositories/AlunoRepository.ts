import Aluno from "../../domain/Aluno"
import { IAlunoRepository } from "../types/IAlunoRepository"
import { createPrismaClient } from "../prisma";

export class AlunoRepository implements IAlunoRepository {
    private alunos: Aluno[] = [];
    private prisma = createPrismaClient();

    // TODO: implementar retorno do banco de dados
    // TODO: popular o banco de dados
    public async getAlunos(): Promise<Aluno[]> {
        const response_database = await this.prisma.aluno.findMany()

        response_database.forEach(aluno => {
            this.alunos.push(
                new Aluno(
                    aluno.id_aluno, 
                    aluno.nome, 
                    aluno.sobreNome, 
                    aluno.email, 
                    aluno.dataCadastro, 
                    aluno.ativo, 
                    []
                )
            )
        })

        return this.alunos
        
    }

}