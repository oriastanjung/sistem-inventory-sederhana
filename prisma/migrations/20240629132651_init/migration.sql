-- CreateTable
CREATE TABLE `Admin` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Perusahaan` (
    `id` VARCHAR(191) NOT NULL,
    `nama_perusahaan` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LostKargo` (
    `id` VARCHAR(191) NOT NULL,
    `no_nota` VARCHAR(191) NOT NULL,
    `lokasi_penumpukan` VARCHAR(191) NOT NULL,
    `perusahaan_id` VARCHAR(191) NULL,
    `tanggal_mulai_penumpukan` DATETIME(3) NOT NULL,
    `tanggal_selesai_penumpukan` DATETIME(3) NOT NULL,
    `jenis_barang` VARCHAR(191) NOT NULL,
    `satuan` INTEGER NOT NULL,
    `jumlah_uang` INTEGER NOT NULL,
    `status_pembayaran` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AlatBerat` (
    `id` VARCHAR(191) NOT NULL,
    `no_nota` VARCHAR(191) NOT NULL,
    `perusahaan_id` VARCHAR(191) NULL,
    `tanggal_mulai_penumpukan` DATETIME(3) NOT NULL,
    `tanggal_selesai_penumpukan` DATETIME(3) NOT NULL,
    `jenis_barang` VARCHAR(191) NOT NULL,
    `satuan` INTEGER NOT NULL,
    `jumlah_uang` INTEGER NOT NULL,
    `status_pembayaran` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kontainer` (
    `id` VARCHAR(191) NOT NULL,
    `no_nota` VARCHAR(191) NOT NULL,
    `ukuran_kontainer` VARCHAR(191) NOT NULL,
    `hari` INTEGER NOT NULL,
    `perusahaan_id` VARCHAR(191) NULL,
    `jumlah_uang` INTEGER NOT NULL,
    `status_pembayaran` BOOLEAN NOT NULL,
    `jenis_kontainer` VARCHAR(191) NOT NULL,
    `tanggal_mulai_m1` DATETIME(3) NOT NULL,
    `tanggal_selesai_m1` DATETIME(3) NOT NULL,
    `tanggal_mulai_m2` DATETIME(3) NOT NULL,
    `tanggal_selesai_m2` DATETIME(3) NOT NULL,
    `lo` INTEGER NOT NULL,
    `kontainer_id` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LostKargo` ADD CONSTRAINT `LostKargo_perusahaan_id_fkey` FOREIGN KEY (`perusahaan_id`) REFERENCES `Perusahaan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlatBerat` ADD CONSTRAINT `AlatBerat_perusahaan_id_fkey` FOREIGN KEY (`perusahaan_id`) REFERENCES `Perusahaan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kontainer` ADD CONSTRAINT `Kontainer_perusahaan_id_fkey` FOREIGN KEY (`perusahaan_id`) REFERENCES `Perusahaan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
