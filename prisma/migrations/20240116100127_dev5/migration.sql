-- CreateTable
CREATE TABLE `IceCreamDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `flavor` VARCHAR(191) NOT NULL,
    `texture` VARCHAR(191) NOT NULL,
    `verstaility` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IceCreams` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img` VARCHAR(191) NOT NULL,
    `alt` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `subtype` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `quantity` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_IceCreamDetailsToIceCreams` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_IceCreamDetailsToIceCreams_AB_unique`(`A`, `B`),
    INDEX `_IceCreamDetailsToIceCreams_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_IceCreamDetailsToIceCreams` ADD CONSTRAINT `_IceCreamDetailsToIceCreams_A_fkey` FOREIGN KEY (`A`) REFERENCES `IceCreamDetails`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_IceCreamDetailsToIceCreams` ADD CONSTRAINT `_IceCreamDetailsToIceCreams_B_fkey` FOREIGN KEY (`B`) REFERENCES `IceCreams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
