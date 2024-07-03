/*
  Warnings:

  - You are about to drop the column `createdAt` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `flowersType` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `imagesUrl` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `product` table. All the data in the column will be lost.
  - Added the required column `flowers_type` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "createdAt",
DROP COLUMN "flowersType",
DROP COLUMN "imagesUrl",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "flowers_type" TEXT NOT NULL,
ADD COLUMN     "images_url" TEXT[],
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
