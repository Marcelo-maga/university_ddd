-- CreateTable
CREATE TABLE "Matricula" (
    "id_matricula" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_cadastro" DATETIME NOT NULL,
    "data_inicio" DATETIME NOT NULL,
    "previsao_fim" DATETIME NOT NULL,
    "curso" TEXT NOT NULL,
    "id_aluno" INTEGER NOT NULL,
    CONSTRAINT "Matricula_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "Aluno" ("id_aluno") ON DELETE RESTRICT ON UPDATE CASCADE
);
