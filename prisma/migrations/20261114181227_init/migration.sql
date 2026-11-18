-- CreateTable
CREATE TABLE `Users` (
    `UserId` VARCHAR(191) NOT NULL,
    `UserName` VARCHAR(191) NOT NULL,
    `UserEmail` VARCHAR(191) NOT NULL,
    `UserPassword` VARCHAR(191) NOT NULL,
    `UserRole` ENUM('Teacher', 'Student') NOT NULL DEFAULT 'Student',

    UNIQUE INDEX `Users_UserId_key`(`UserId`),
    PRIMARY KEY (`UserId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `TaskId` VARCHAR(191) NOT NULL,
    `TaskTitle` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Task_TaskId_key`(`TaskId`),
    PRIMARY KEY (`TaskId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Submission` (
    `SubId` VARCHAR(191) NOT NULL,
    `SubGrad` DECIMAL(65, 30) NULL,
    `SubFile` LONGBLOB NOT NULL,
    `StudentSubmissionId` VARCHAR(191) NOT NULL,
    `TaskSubmissionId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Submission_SubId_key`(`SubId`),
    PRIMARY KEY (`SubId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_StudentSubmissionId_fkey` FOREIGN KEY (`StudentSubmissionId`) REFERENCES `Users`(`UserId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_TaskSubmissionId_fkey` FOREIGN KEY (`TaskSubmissionId`) REFERENCES `Task`(`TaskId`) ON DELETE RESTRICT ON UPDATE CASCADE;
