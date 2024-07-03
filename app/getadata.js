// lib/getData.js

import prisma from "@/lib/prisma";

const getData = async () => {
  try {
    const flowers = await prisma.Flower.findMany();
    return flowers;
  } catch (error) {
    console.error("Error fetching flowers:", error);
    throw new Error("Failed to fetch flowers");
  }
};

export default getData;
