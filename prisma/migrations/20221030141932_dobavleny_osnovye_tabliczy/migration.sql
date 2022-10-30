-- CreateEnum
CREATE TYPE "ApplicationType" AS ENUM ('findApplicant', 'helpToMakeResume');

-- CreateTable
CREATE TABLE "Applicant" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Applicant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VacancySavedByApplicant" (
    "applicantId" TEXT NOT NULL,
    "vacancyId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VacancySavedByApplicant_pkey" PRIMARY KEY ("applicantId","vacancyId")
);

-- CreateTable
CREATE TABLE "Vacancy" (
    "id" TEXT NOT NULL,
    "employerId" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "post" TEXT NOT NULL,
    "fieldOfActivity" INTEGER NOT NULL,
    "placeOfWork" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "duties" TEXT,
    "requirements" TEXT,
    "workingSchedule" TEXT,
    "phone" TEXT NOT NULL,
    "phoneHidden" BOOLEAN NOT NULL,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "archivedReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vacancy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employer" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeSavedByEmployer" (
    "employerId" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResumeSavedByEmployer_pkey" PRIMARY KEY ("employerId","resumeId")
);

-- CreateTable
CREATE TABLE "Resume" (
    "id" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT,
    "phone" TEXT NOT NULL,
    "phoneHidden" BOOLEAN NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "placeOfResidence" INTEGER NOT NULL,
    "desiredPost" TEXT,
    "fieldOfActivity" INTEGER NOT NULL,
    "education" TEXT,
    "experience" TEXT,
    "aboutMe" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApplicantEmployerChat" (
    "id" TEXT NOT NULL,
    "employerId" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "viewedByEmployer" BOOLEAN NOT NULL DEFAULT false,
    "viewedByApplicant" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ApplicantEmployerChat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApplicantEmployerChatMessage" (
    "id" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApplicantEmployerChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployerAdminChat" (
    "id" TEXT NOT NULL,
    "employerId" TEXT NOT NULL,
    "viewedByEmployer" BOOLEAN NOT NULL DEFAULT false,
    "viewedByAdmin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmployerAdminChat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployerAdminChatMessage" (
    "id" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmployerAdminChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApplicantAdminChat" (
    "id" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "viewedByApplicant" BOOLEAN NOT NULL DEFAULT false,
    "viewedByAdmin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ApplicantAdminChat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApplicantAdminChatMessage" (
    "id" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApplicantAdminChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "type" "ApplicationType" NOT NULL,
    "addition" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Applicant_phone_key" ON "Applicant"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Employer_phone_key" ON "Employer"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Resume_applicantId_key" ON "Resume"("applicantId");

-- CreateIndex
CREATE UNIQUE INDEX "EmployerAdminChat_employerId_key" ON "EmployerAdminChat"("employerId");

-- CreateIndex
CREATE UNIQUE INDEX "ApplicantAdminChat_applicantId_key" ON "ApplicantAdminChat"("applicantId");

-- AddForeignKey
ALTER TABLE "VacancySavedByApplicant" ADD CONSTRAINT "VacancySavedByApplicant_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VacancySavedByApplicant" ADD CONSTRAINT "VacancySavedByApplicant_vacancyId_fkey" FOREIGN KEY ("vacancyId") REFERENCES "Vacancy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vacancy" ADD CONSTRAINT "Vacancy_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "Employer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeSavedByEmployer" ADD CONSTRAINT "ResumeSavedByEmployer_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "Employer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeSavedByEmployer" ADD CONSTRAINT "ResumeSavedByEmployer_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resume" ADD CONSTRAINT "Resume_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplicantEmployerChat" ADD CONSTRAINT "ApplicantEmployerChat_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "Employer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplicantEmployerChat" ADD CONSTRAINT "ApplicantEmployerChat_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplicantEmployerChatMessage" ADD CONSTRAINT "ApplicantEmployerChatMessage_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "ApplicantEmployerChat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployerAdminChat" ADD CONSTRAINT "EmployerAdminChat_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "Employer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployerAdminChatMessage" ADD CONSTRAINT "EmployerAdminChatMessage_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "EmployerAdminChat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplicantAdminChat" ADD CONSTRAINT "ApplicantAdminChat_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplicantAdminChatMessage" ADD CONSTRAINT "ApplicantAdminChatMessage_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "ApplicantAdminChat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
