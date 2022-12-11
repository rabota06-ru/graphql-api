import {
  ApplicantProfile,
  EmployerProfile,
  Resume,
  PrismaClient,
  Vacancy,
  ResponseToVacancy,
  InvitationToVacancy,
  Chat,
} from "@prisma/client";
import { createUsers } from "./data/users";
import { User } from "../generated";
import { createApplicantProfiles } from "./data/applicant-profiles";
import { createEmployerProfiles } from "./data/employer-profiles";
import { createResumes } from "./data/resumes";
import { createVacancies } from "./data/vacancies";
import { createResponsesToVacancies } from "./data/responses-to-vacancies";
import { createInvitationsToVacancies } from "./data/invitations-to-vacancies";
import { createEmployerApplicantChats } from "./data/employer-applicant-chats";
import { createEmployerApplicantChatsMessages } from "./data/employer-applicant-messages";
import { createAdminUserChats } from "./data/admin-user-chats";
import { createAdminChatMessages } from "./data/admin-chat-messages";

const prisma = new PrismaClient();

async function seed() {
  const keys = [
    "adminChatMessage",
    "adminChat",
    "chatMessage",
    "chat",
    "invitationToVacancy",
    "responseToVacancy",
    "vacancy",
    "resume",
    "employerProfile",
    "applicantProfile",
    "user",
  ];
  for await (const key of keys) {
    // @ts-ignore
    await prisma[key].deleteMany();
    console.log(`Удалены все записи в модели ${key}`);
  }
  await createUsers(prisma);
  console.log("Созданы записи в модели user");
  await createApplicantProfiles(prisma);
  console.log("Созданы записи в модели applicantProfile");
  await createEmployerProfiles(prisma);
  console.log("Созданы записи в модели employerProfile");
  await createResumes(prisma);
  console.log("Созданы записи в модели resume");
  await createVacancies(prisma);
  console.log("Созданы записи в модели vacancy");
  await createResponsesToVacancies(prisma);
  console.log("Созданы записи в модели responseToVacancy");
  await createInvitationsToVacancies(prisma);
  console.log("Созданы записи в модели invitationToVacancy");
  await createEmployerApplicantChats(prisma);
  console.log("Созданы записи в модели chat");
  await createEmployerApplicantChatsMessages(prisma);
  console.log("Созданы записи в модели chatMessage");
  await createAdminUserChats(prisma);
  console.log("Созданы записи в модели adminChat");
  await createAdminChatMessages(prisma);
  console.log("Созданы записи в модели adminChatMessage");
}

seed();
