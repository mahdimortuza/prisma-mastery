import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
  //   const posts = await prisma.$queryRaw`SELECT * from "posts"`;
  //   console.log(posts);

  // delete user table data
  await prisma.$queryRaw`TRUNCATE TABLE "categories" CASCADE`;
};

rawQuery();
