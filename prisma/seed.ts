import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.aluno.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      nome: "Alice",
      sobreNome: "Santos",
      email: "alice@prisma.io",
      dataCadastro: new Date("2022-03-25"),
      ativo: true,
    },
  });

  const rafaela = await prisma.aluno.upsert({
    where: { email: "rafaela@prisma.io" },
    update: {},
    create: {
      nome: "Rafaela",
      sobreNome: "Petelin",
      email: "rafaela@prisma.io",
      dataCadastro: new Date("2022-03-25"),
      ativo: true,
    },
  });

  const matematica = await prisma.disciplina.upsert({
    where: { nome: "Matemática" },
    update: {},
    create: {
      nome: "Matemática",
      disponivel: true,
      ead: true,
      valor: 100,
    },
  });

  const historia = await prisma.disciplina.upsert({
    where: { nome: "História" },
    update: {},
    create: {
      nome: "História",
      disponivel: true,
      ead: true,
      valor: 100,
    },
  });


}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
