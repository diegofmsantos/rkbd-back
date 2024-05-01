/*
  Warnings:

  - You are about to drop the `Time` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Time";

-- CreateTable
CREATE TABLE "time" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "seguidores" DOUBLE PRECISION NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "time_pkey" PRIMARY KEY ("id")
);
