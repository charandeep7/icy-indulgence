/*
  Warnings:

  - You are about to drop the column `type` on the `icecreams` table. All the data in the column will be lost.
  - You are about to drop the `_icecreamdetailstoicecreams` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_icecreamdetailstoicecreams` DROP FOREIGN KEY `_IceCreamDetailsToIceCreams_A_fkey`;

-- DropForeignKey
ALTER TABLE `_icecreamdetailstoicecreams` DROP FOREIGN KEY `_IceCreamDetailsToIceCreams_B_fkey`;

-- AlterTable
ALTER TABLE `icecreams` DROP COLUMN `type`;

-- DropTable
DROP TABLE `_icecreamdetailstoicecreams`;

-- AddForeignKey
ALTER TABLE `IceCreamDetails` ADD CONSTRAINT `IceCreamDetails_id_fkey` FOREIGN KEY (`id`) REFERENCES `IceCreams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `IceCreams` ADD CONSTRAINT `IceCreams_id_fkey` FOREIGN KEY (`id`) REFERENCES `Flavors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
