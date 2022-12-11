/*
  Warnings:

  - Added the required column `sender` to the `AdminChatMessage` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AdminChatMessageSender" AS ENUM ('User', 'Admin');

-- AlterTable
ALTER TABLE "AdminChatMessage" ADD COLUMN     "sender" "AdminChatMessageSender" NOT NULL;
