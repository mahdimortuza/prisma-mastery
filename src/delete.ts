import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 12,
  //     },
  //   });

  const deleteMany = await prisma.post.deleteMany({});

  console.log(deleteMany);
};

deleteData();
