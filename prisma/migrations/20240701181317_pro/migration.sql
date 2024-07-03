/*
  Warnings:

  - You are about to drop the column `type` on the `product` table. All the data in the column will be lost.
  - Added the required column `product_subtype` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_type` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "type",
ADD COLUMN     "product_subtype" TEXT NOT NULL,
ADD COLUMN     "product_type" TEXT NOT NULL;
