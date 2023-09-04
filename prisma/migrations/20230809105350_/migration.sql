/*
  Warnings:

  - You are about to drop the column `CarProductsId` on the `img` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "img" DROP CONSTRAINT "img_CarProductsId_fkey";

-- AlterTable
ALTER TABLE "img" DROP COLUMN "CarProductsId",
ADD COLUMN     "carProductsId" TEXT;

-- AddForeignKey
ALTER TABLE "img" ADD CONSTRAINT "img_carProductsId_fkey" FOREIGN KEY ("carProductsId") REFERENCES "carProducts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
