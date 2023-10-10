export class Matricula {
  public matriculaId: number;
  public dataCadastro: Date;
  public dataInicio: Date;
  public previsaoFim: Date;
  public curso: string;
  public alunoId: number;
  public trancado: boolean;

  constructor({
    matriculaId,
    dataCadastro,
    dataInicio,
    previsaoFim,
    curso,
    alunoId,
    trancado,
  }: {
    matriculaId: number;
    dataCadastro: Date;
    dataInicio: Date;
    previsaoFim: Date;
    curso: string;
    alunoId: number;
    trancado: boolean;
  }) {
    this.matriculaId = matriculaId;
    this.dataCadastro = dataCadastro;
    this.dataInicio = dataInicio;
    this.previsaoFim = previsaoFim;
    this.curso = curso;
    this.alunoId = alunoId;
    this.trancado = trancado;
  }
}
