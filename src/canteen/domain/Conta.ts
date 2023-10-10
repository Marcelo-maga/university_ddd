interface ContaConstructorProps {
    id_conta: number;
    id_aluno: number;
    numero_conta: number;
    data_criação: Date;
}

export class Conta {
    public id_conta: number;
    public id_aluno: number;
    public numero_conta: number;
    public data_criação: Date;

    constructor({ id_conta, id_aluno, numero_conta, data_criação }: ContaConstructorProps) {
        this.id_conta = id_conta;
        this.id_aluno = id_aluno;
        this.numero_conta = numero_conta;
        this.data_criação = data_criação;
    }
}