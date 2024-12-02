import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 6,
  //     },
  //     data: {
  //       title: "title updated",
  //       authorName: "kazi norzul",
  //       content: "hello world",
  //     },
  //   });

  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "this is title 2",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });

  //   console.log(updateMany);

  const upsertData = await prisma.post.upsert({
    where: {
      id: 13,
    },
    update: {
      authorName: "abdul",
    },
    create: {
      title: "title 1",
      content: "content 1",
    },
  });
  console.log(upsertData);
};
updates();
