
export default class Disciplina {
    public DisciplinaId: number;
    public Nome: string;
    public Valor: number;
    public Disponivel: boolean;
    public Ead: boolean;

    constructor(disciplinaId: number, nome: string, valor: number, disponivel: boolean, ead: boolean) {
        this.DisciplinaId = disciplinaId;
        this.Nome = nome;
        this.Valor = valor;
        this.Disponivel = disponivel;
        this.Ead = ead;
    }
}