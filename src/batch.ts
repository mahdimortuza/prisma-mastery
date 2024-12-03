import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "sidul",
      email: "sidul@gmail.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 6,
    },
    data: {
      age: 50,
    },
  });

  const [userData, updatedData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(userData, updatedData);
};

batchTransaction();
