import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  // offset paginaion
  //   const result = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //   });

  // cursor based pagination

  //   const result = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //     cursor: {
  //       id: 20,
  //     },
  //   });

  // sorting

  const result = await prisma.post.findMany({
    orderBy: {
      id: "desc",
    },
    where: {
      title: "title 1",
    },
  });

  console.log(result);
};
paginationSorting();
