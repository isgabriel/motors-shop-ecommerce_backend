/*
  Warnings:

  - You are about to drop the column `name` on the `carProducts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "carProducts" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;
