/*
  Warnings:

  - A unique constraint covering the columns `[employerId,applicantId]` on the table `Chat` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Chat_employerId_applicantId_key" ON "Chat"("employerId", "applicantId");
