-- CreateEnum
CREATE TYPE "Gasoline" AS ENUM ('FLEX', 'HIBRID', 'ELECTRIC');

-- CreateTable
CREATE TABLE "carProducts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "coverImg" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "km" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "gasoline" "Gasoline" NOT NULL DEFAULT 'FLEX',
    "tablePife" INTEGER NOT NULL,
    "business" BOOLEAN NOT NULL DEFAULT false,
    "imgId" TEXT NOT NULL,

    CONSTRAINT "carProducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "img" (
    "id" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "img_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "carProducts" ADD CONSTRAINT "carProducts_imgId_fkey" FOREIGN KEY ("imgId") REFERENCES "img"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
