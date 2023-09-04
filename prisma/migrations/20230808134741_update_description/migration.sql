/*
  Warnings:

  - You are about to drop the column `img` on the `img` table. All the data in the column will be lost.
  - Added the required column `url_img` to the `img` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "carProducts" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "img" DROP COLUMN "img",
ADD COLUMN     "url_img" TEXT NOT NULL;
