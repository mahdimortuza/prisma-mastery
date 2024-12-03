import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {
  // find average age
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  //   find sum of ages
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  //   find count of number fields
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });

  //   find number of records
  const countData = await prisma.user.count();

  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });

  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });
  console.log(minAge);
};
aggregates();
