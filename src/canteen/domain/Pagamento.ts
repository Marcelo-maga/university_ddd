interface PagamentoConstructorProps {
    id_pagamento: number;
    id_conta: number;
    valor: number;
    data_pagamento: Date;
}

export class Pagamento {
    public id_pagamento: number;
    public id_conta: number;
    public valor: number;
    public data_pagamento: Date;

    constructor({ id_pagamento, id_conta, valor, data_pagamento }: PagamentoConstructorProps) {
        this.id_pagamento = id_pagamento;
        this.id_conta = id_conta;
        this.valor = valor;
        this.data_pagamento = data_pagamento;
    }
}