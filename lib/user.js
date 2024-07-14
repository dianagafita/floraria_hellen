import prisma from "./prisma";

export async function createUser(
  email,
  password,
  firstName,
  secondName,
  phone
) {
  const newUser = await prisma.user.create({
    data: {
      email,
      password,
      first_name: firstName,
      second_name: secondName,
      phone,
    },
  });
  console.log("CCCCCCCCCCCCCCCCCCCCCC", newUser.id);
  return newUser.id;
}

export async function getUserByEmail(email) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  console.log("CCCCCCCCCCCCCCCCCCCCCC");
  return user;
}
