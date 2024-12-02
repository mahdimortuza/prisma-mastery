import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // creating data
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "this is title 2",
  //       content: "this is content...2",
  //       authorName: "rahat 2",
  //     },
  //   });
  //   console.log(result);

  // retrieving data
  const getAllFromDb = await prisma.post.findMany();
  console.log(getAllFromDb);
};

main();
