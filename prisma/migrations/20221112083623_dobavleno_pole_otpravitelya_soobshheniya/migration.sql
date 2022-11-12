/*
  Warnings:

  - Added the required column `sender` to the `ChatMessage` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MessageSender" AS ENUM ('Applicant', 'Employer');

-- AlterTable
ALTER TABLE "ChatMessage" ADD COLUMN     "sender" "MessageSender" NOT NULL;
