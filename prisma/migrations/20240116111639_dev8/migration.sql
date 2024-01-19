-- CreateTable
CREATE TABLE `IceCreamDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `flavor` VARCHAR(191) NOT NULL,
    `texture` VARCHAR(191) NOT NULL,
    `verstaility` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `iceCreamId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `IceCreamDetails` ADD CONSTRAINT `IceCreamDetails_iceCreamId_fkey` FOREIGN KEY (`iceCreamId`) REFERENCES `IceCreams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
