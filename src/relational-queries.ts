import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  const result = await prisma.user
    .findUnique({
      where: {
        id: 1,
      },
    })
    .post();

  //relational filters
  const publishedPostUsers = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir(publishedPostUsers, { depth: Infinity });
};
relationalQueries();
