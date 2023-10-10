import { Disciplina } from "./Disciplina";

export class Aluno {
  public alunoId: number;
  public nome: string;
  public sobrenome: string;
  public email: string;
  public dataCadastro: Date;
  public ativo: boolean;
  public disciplinas?: Array<Disciplina>;

  constructor({
    alunoId,
    nome,
    sobrenome,
    email,
    dataCadastro,
    ativo,
    disciplinas,
  }: {
    alunoId: number;
    nome: string;
    sobrenome: string;
    email: string;
    dataCadastro: Date;
    ativo: boolean;
    disciplinas?: Array<Disciplina>;
  }) {
    this.alunoId = alunoId;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.dataCadastro = dataCadastro;
    this.ativo = ativo;
    this.disciplinas = disciplinas;
  }
}
