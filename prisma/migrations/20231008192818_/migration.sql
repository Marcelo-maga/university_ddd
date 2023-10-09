-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Matricula" (
    "id_matricula" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_cadastro" DATETIME NOT NULL,
    "data_inicio" DATETIME NOT NULL,
    "previsao_fim" DATETIME NOT NULL,
    "curso" TEXT NOT NULL,
    "trancado" BOOLEAN NOT NULL DEFAULT false,
    "id_aluno" INTEGER NOT NULL,
    CONSTRAINT "Matricula_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "Aluno" ("id_aluno") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Matricula" ("curso", "data_cadastro", "data_inicio", "id_aluno", "id_matricula", "previsao_fim", "trancado") SELECT "curso", "data_cadastro", "data_inicio", "id_aluno", "id_matricula", "previsao_fim", "trancado" FROM "Matricula";
DROP TABLE "Matricula";
ALTER TABLE "new_Matricula" RENAME TO "Matricula";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
