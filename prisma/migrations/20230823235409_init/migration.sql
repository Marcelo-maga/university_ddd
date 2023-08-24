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
    "ead" BOOLEAN NOT NULL,
    "id_aluno" INTEGER NOT NULL,
    CONSTRAINT "Disciplina_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "Aluno" ("id_aluno") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");
