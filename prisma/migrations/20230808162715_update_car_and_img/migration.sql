/*
  Warnings:

  - You are about to drop the column `carProductsId` on the `img` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "img" DROP CONSTRAINT "img_carProductsId_fkey";

-- AlterTable
ALTER TABLE "carProducts" ADD COLUMN     "imgId" TEXT;

-- AlterTable
ALTER TABLE "img" DROP COLUMN "carProductsId";

-- AddForeignKey
ALTER TABLE "carProducts" ADD CONSTRAINT "carProducts_imgId_fkey" FOREIGN KEY ("imgId") REFERENCES "img"("id") ON DELETE CASCADE ON UPDATE CASCADE;
