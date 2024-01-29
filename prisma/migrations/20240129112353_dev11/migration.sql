-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `Item_itemId_fkey`;

-- AddForeignKey
ALTER TABLE `Favorite` ADD CONSTRAINT `Favorite_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
