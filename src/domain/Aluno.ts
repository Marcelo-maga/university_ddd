import Disciplina from "./Disciplina";

export default class Aluno {
    private id: number;
    private nome: string;
    private sobrenome: string;
    private email: string;
    private dataCadastro: Date;
    private ativo: boolean;
    private disciplinas: Array<Disciplina>;

    constructor(id: number, nome: string, sobrenome: string, email: string, dataCadastro: Date, ativo: boolean, disciplinas: Array<Disciplina>) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.dataCadastro = dataCadastro;
        this.ativo = ativo;
        this.disciplinas = disciplinas;
    }

}