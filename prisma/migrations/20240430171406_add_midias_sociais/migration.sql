/*
  Warnings:

  - You are about to drop the column `seguidores` on the `time` table. All the data in the column will be lost.
  - Added the required column `facebook` to the `time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instagram` to the `time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `socios` to the `time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tiktok` to the `time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `twitter` to the `time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `youtube` to the `time` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "time" DROP COLUMN "seguidores",
ADD COLUMN     "facebook" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "instagram" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "socios" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "tiktok" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "twitter" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "youtube" DOUBLE PRECISION NOT NULL;
