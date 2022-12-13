import { Chat, Prisma, PrismaClient } from "@prisma/client";

export async function createEmployerApplicantChats(prisma: PrismaClient) {
  return prisma.chat.createMany({ data: chats });
}

const chats: Prisma.ChatUncheckedCreateInput[] = [
  {
    id: "clbjgg1ok001y3b6m29m763qh",
    applicantId: "clbjbxgdy00083b6nlxby561h",
    employerId: "clbjcx1i500023b6mivy0pa27",
    viewedByApplicant: false,
    viewedByEmployer: false,
  },
  {
    id: "clbjgg1ok001z3b6mu8qha5qf",
    applicantId: "clbjbxgdy00013b6n0pxixvy9",
    employerId: "clbjcx1i500013b6me8z4lo2m",
    viewedByApplicant: true,
    viewedByEmployer: false,
  },
  {
    id: "clbjgg1ok00203b6mrf37u3ld",
    applicantId: "clbjbxgdy00023b6n1q36zmip",
    employerId: "clbjcx1i500023b6mivy0pa27",
    viewedByApplicant: true,
    viewedByEmployer: true,
  },
  {
    id: "clbjgg1ok00213b6myl4pfou5",
    applicantId: "clbjbxgdy00033b6nyblb8sx4",
    employerId: "clbjcx1i500033b6mna3r0hjq",
    viewedByApplicant: false,
    viewedByEmployer: false,
  },
  {
    id: "clbjgg1ok00223b6mfibz2n4r",
    applicantId: "clbjbxgdy00043b6noqnkf4a2",
    employerId: "clbjcx1i500033b6mna3r0hjq",
    viewedByApplicant: true,
    viewedByEmployer: false,
  },
  {
    id: "clbjgg1ok00233b6mof6ij3uz",
    applicantId: "clbjbxgdy00063b6nupvrbv2e",
    employerId: "clbjcx1i500043b6mpdr53bcw",
    viewedByApplicant: false,
    viewedByEmployer: true,
  },
  {
    id: "clbjgg1ok00243b6mxn7x6bv8",
    applicantId: "clbjbxgdy00073b6nmt2n4ich",
    employerId: "clbjcx1i500053b6msazxc12g",
    viewedByApplicant: false,
    viewedByEmployer: true,
  },
  {
    id: "clbjgg1ok00253b6m3jka9min",
    applicantId: "clbjbxgdy00083b6nlxby561h",
    employerId: "clbjcx1i500063b6mxrby75vw",
    viewedByApplicant: true,
    viewedByEmployer: true,
  },
  {
    id: "clbjgg1ok00263b6m4mjjna3c",
    applicantId: "clbjbxgdy00093b6nddpps1y4",
    employerId: "clbjcx1i500073b6m323zq2fi",
    viewedByApplicant: false,
    viewedByEmployer: false,
  },
  {
    id: "clbjgg1ok00273b6m84snb8mk",
    applicantId: "clbjbxgdy000a3b6n55rb8bek",
    employerId: "clbjcx1i500083b6mqr84mene",
    viewedByApplicant: true,
    viewedByEmployer: true,
  },
];
