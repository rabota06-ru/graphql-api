-- AlterTable
ALTER TABLE "InvitationToVacancy" ADD COLUMN     "viewed" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ResponseToVacancy" ADD COLUMN     "viewed" BOOLEAN NOT NULL DEFAULT false;
