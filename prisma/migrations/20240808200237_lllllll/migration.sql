/*
  Warnings:

  - Added the required column `sender_info` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "sender_info" JSONB NOT NULL;