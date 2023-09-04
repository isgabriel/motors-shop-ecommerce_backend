/*
  Warnings:

  - You are about to drop the column `imgId` on the `carProducts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "carProducts" DROP CONSTRAINT "carProducts_imgId_fkey";

-- AlterTable
ALTER TABLE "carProducts" DROP COLUMN "imgId";

-- AlterTable
ALTER TABLE "img" ADD COLUMN     "carProductsId" TEXT;

-- AddForeignKey
ALTER TABLE "img" ADD CONSTRAINT "img_carProductsId_fkey" FOREIGN KEY ("carProductsId") REFERENCES "carProducts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
