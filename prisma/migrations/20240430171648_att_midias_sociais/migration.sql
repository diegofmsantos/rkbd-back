/*
  Warnings:

  - You are about to drop the column `createdAt` on the `time` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `time` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "time" DROP COLUMN "createdAt",
DROP COLUMN "updateAt";
