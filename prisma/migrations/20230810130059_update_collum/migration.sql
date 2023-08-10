/*
  Warnings:

  - Added the required column `brand` to the `carProducts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `carProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "carProducts" ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "model" TEXT NOT NULL;
