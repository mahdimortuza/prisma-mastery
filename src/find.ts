import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // retrieving all data
  const getAllFromDb = await prisma.post.findMany({
    select: {
      title: true,
    },
  });

  // //find the first one using findFirst and findFirstOrThrow
  // const findFirst = await prisma.post.findFirstOrThrow({
  //   where: {
  //     published: false,
  //   },
  // });

  // //find the using findUnique and findUniqueOrThrow

  // const findUnique = await prisma.post.findUniqueOrThrow({
  //   where: {
  //     id: 13,
  //   },
  //   select: {
  //     title: true,
  //     content: true,
  //   },
  // });

  console.log({ getAllFromDb });
};

main();
