
export default class Disciplina {
    public disciplinaId?: number;
    public nome: string;
    public valor: number;
    public disponivel: boolean;
    public ead: boolean;

    constructor({
        disciplinaId,
        disponivel,
        ead,
        nome,
        valor
    }: {
        disciplinaId?: number, nome: string, valor: number, disponivel: boolean, ead: boolean
    }) {
        this.disciplinaId = disciplinaId;
        this.nome = nome;
        this.valor = valor;
        this.disponivel = disponivel;
        this.ead = ead;
    }
}