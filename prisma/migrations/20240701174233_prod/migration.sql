/*
  Warnings:

  - You are about to drop the `Flower` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Flower";

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "flowers" TEXT[],
    "price" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "flowersType" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
