/*
  Warnings:

  - You are about to drop the column `id_aluno` on the `Disciplina` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_AlunoDisciplina" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AlunoDisciplina_A_fkey" FOREIGN KEY ("A") REFERENCES "Aluno" ("id_aluno") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AlunoDisciplina_B_fkey" FOREIGN KEY ("B") REFERENCES "Disciplina" ("id_disciplina") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Disciplina" (
    "id_disciplina" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "disponivel" BOOLEAN NOT NULL,
    "ead" BOOLEAN NOT NULL
);
INSERT INTO "new_Disciplina" ("disponivel", "ead", "id_disciplina", "nome", "valor") SELECT "disponivel", "ead", "id_disciplina", "nome", "valor" FROM "Disciplina";
DROP TABLE "Disciplina";
ALTER TABLE "new_Disciplina" RENAME TO "Disciplina";
CREATE UNIQUE INDEX "Disciplina_nome_key" ON "Disciplina"("nome");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_AlunoDisciplina_AB_unique" ON "_AlunoDisciplina"("A", "B");

-- CreateIndex
CREATE INDEX "_AlunoDisciplina_B_index" ON "_AlunoDisciplina"("B");
