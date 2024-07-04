import prisma from "@/lib/prisma";

export async function getAllProducts() {
  const users = await prisma.user.findMany();
  return users;
}

export async function getUserById(id) {
  const users = await prisma.user.findFirst({
    where: {
      id: parseInt(id),
    },
  });
  return users;
}
