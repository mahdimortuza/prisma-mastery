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

  // creating many data
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "this is title 1",
        content: "this is content...1",
        authorName: "rahat 1",
      },
      {
        title: "this is title 2",
        content: "this is content...2",
        authorName: "rahat 2",
      },
      {
        title: "this is title 3",
        content: "this is content...3",
        authorName: "rahat 3",
      },
      {
        title: "this is title 4",
        content: "this is content...4",
        authorName: "rahat 4",
      },
      {
        title: "this is title 5",
        content: "this is content...5",
        authorName: "rahat 5",
      },
      {
        title: "this is title 6",
        content: "this is content...6",
        authorName: "rahat 6",
      },
      {
        title: "this is title 7",
        content: "this is content...7",
        authorName: "rahat 7",
      },
      {
        title: "this is title 8",
        content: "this is content...8",
        authorName: "rahat 8",
      },
      {
        title: "this is title 9",
        content: "this is content...9",
        authorName: "rahat 9",
      },
      {
        title: "this is title 10",
        content: "this is content...10",
        authorName: "rahat 10",
      },
    ],
  });
  console.log(createMany);
};

main();
