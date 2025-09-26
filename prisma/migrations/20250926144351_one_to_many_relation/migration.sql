/*
  Warnings:

  - You are about to drop the column `artist` on the `Song` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Song" DROP COLUMN "artist",
ADD COLUMN     "artistId" INTEGER;

-- CreateTable
CREATE TABLE "public"."Artist" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Song" ADD CONSTRAINT "Song_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "public"."Artist"("id") ON DELETE SET NULL ON UPDATE CASCADE;
