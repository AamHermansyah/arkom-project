/*
  Warnings:

  - Added the required column `imageUrl` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `imageUrl` LONGTEXT NOT NULL;
