/*
  Warnings:

  - You are about to drop the column `alt` on the `icecreams` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `icecreams` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `quantity` on the `icecreams` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the `icecreamdetails` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `flavorId` to the `IceCreams` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `icecreamdetails` DROP FOREIGN KEY `IceCreamDetails_id_fkey`;

-- DropForeignKey
ALTER TABLE `icecreams` DROP FOREIGN KEY `IceCreams_id_fkey`;

-- AlterTable
ALTER TABLE `icecreams` DROP COLUMN `alt`,
    ADD COLUMN `flavorId` INTEGER NOT NULL,
    MODIFY `price` DOUBLE NOT NULL,
    MODIFY `quantity` INTEGER NOT NULL;

-- DropTable
DROP TABLE `icecreamdetails`;

-- AddForeignKey
ALTER TABLE `IceCreams` ADD CONSTRAINT `IceCreams_flavorId_fkey` FOREIGN KEY (`flavorId`) REFERENCES `Flavors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
