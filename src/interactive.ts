import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
  const result = await prisma.$transaction(async (tractionClient) => {
    //query 1
    const getAllPosts = await tractionClient.post.findMany({
      where: {
        published: true,
      },
    });
    //query 2

    const countUser = await tractionClient.user.count();

    //query 3
    const updateUser = await tractionClient.user.update({
      where: {
        id: 80,
      },
      data: {
        age: 48,
      },
    });

    return {
      getAllPosts,
      countUser,
      updateUser,
    };
  });
  console.log(result);
};
interactiveTransaction();
