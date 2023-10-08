export class Matricula {
  public matriculaId: number;
  public dataCadastro: Date;
  public dataInicio: Date;
  public previsaoFim: Date;
  public curso: string;
  public alunoId: number;

  constructor({
    matriculaId,
    dataCadastro,
    dataInicio,
    previsaoFim,
    curso,
    alunoId,
  }: {
    matriculaId: number;
    dataCadastro: Date;
    dataInicio: Date;
    previsaoFim: Date;
    curso: string;
    alunoId: number;
  }) {
    this.matriculaId = matriculaId;
    this.dataCadastro = dataCadastro;
    this.dataInicio = dataInicio;
    this.previsaoFim = previsaoFim;
    this.curso = curso;
    this.alunoId = alunoId;
  }
}
