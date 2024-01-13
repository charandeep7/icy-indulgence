/*
  Warnings:

  - You are about to drop the `flavor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `flavor`;

-- CreateTable
CREATE TABLE `Flavors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `alt` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
