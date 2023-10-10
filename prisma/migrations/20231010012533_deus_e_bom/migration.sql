-- CreateTable
CREATE TABLE "Aluno" (
    "id_aluno" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobreNome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dataCadastro" DATETIME NOT NULL,
    "ativo" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Disciplina" (
    "id_disciplina" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "disponivel" BOOLEAN NOT NULL,
    "ead" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Matricula" (
    "id_matricula" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_cadastro" DATETIME NOT NULL,
    "data_inicio" DATETIME NOT NULL,
    "previsao_fim" DATETIME NOT NULL,
    "curso" TEXT NOT NULL,
    "trancado" BOOLEAN NOT NULL DEFAULT false,
    "id_aluno" INTEGER NOT NULL,
    CONSTRAINT "Matricula_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "Aluno" ("id_aluno") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Conta" (
    "id_conta" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_aluno" INTEGER NOT NULL,
    "numero_conta" INTEGER NOT NULL,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Conta_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "Aluno" ("id_aluno") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ItemConta" (
    "id_itemConta" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_conta" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Produto" (
    "id_produto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Pagamento" (
    "id_pagamento" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_conta" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "data_pagamento" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Pagamento_id_conta_fkey" FOREIGN KEY ("id_conta") REFERENCES "Conta" ("id_conta") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AlunoDisciplina" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AlunoDisciplina_A_fkey" FOREIGN KEY ("A") REFERENCES "Aluno" ("id_aluno") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AlunoDisciplina_B_fkey" FOREIGN KEY ("B") REFERENCES "Disciplina" ("id_disciplina") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ItemProduto" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ItemProduto_A_fkey" FOREIGN KEY ("A") REFERENCES "ItemConta" ("id_itemConta") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ItemProduto_B_fkey" FOREIGN KEY ("B") REFERENCES "Produto" ("id_produto") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Disciplina_nome_key" ON "Disciplina"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Conta_id_aluno_key" ON "Conta"("id_aluno");

-- CreateIndex
CREATE UNIQUE INDEX "Conta_numero_conta_key" ON "Conta"("numero_conta");

-- CreateIndex
CREATE UNIQUE INDEX "_AlunoDisciplina_AB_unique" ON "_AlunoDisciplina"("A", "B");

-- CreateIndex
CREATE INDEX "_AlunoDisciplina_B_index" ON "_AlunoDisciplina"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ItemProduto_AB_unique" ON "_ItemProduto"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemProduto_B_index" ON "_ItemProduto"("B");
