import prisma from "@/lib/prisma";

export async function getAllProducts() {
  const products = await prisma.product.findMany();
  return products;
}

export async function getProductsByType({ type }) {
  console.log(type);
  const products = await prisma.product.findMany({
    where: {
      product_type: type,
    },
  });
  return products;
}

export async function getProductsBySubType({ type, subtype }) {
  const products = await prisma.product.findMany({
    where: {
      product_type: type,
      product_subtype: subtype,
    },
  });
  return products;
}

export async function getProductById(id) {
  const products = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  return products;
}
