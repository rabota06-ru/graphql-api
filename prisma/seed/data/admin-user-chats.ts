import { Prisma, PrismaClient } from "@prisma/client";

export function createAdminUserChats(prisma: PrismaClient) {
  return prisma.adminChat.createMany({ data: chats });
}

const chats: Prisma.AdminChatUncheckedCreateInput[] = [
  {
    id: "clbjhchqx000a3b6s27004hb0",
    userId: "clbjcbifv00003b6n3cvvgrxt",
    viewedByAdmin: false,
    viewedByUser: false,
  },
  {
    id: "clbjhchqx000b3b6sovp4a76i",
    userId: "clbjcbifv00013b6nfvof4lp9",
    viewedByAdmin: true,
    viewedByUser: false,
  },
  {
    id: "clbjhchqx000c3b6skknjomzv",
    userId: "clbjcbifv00023b6nrof4g07l",
    viewedByAdmin: false,
    viewedByUser: true,
  },
  {
    id: "clbjhchqx000d3b6s0is6iiyv",
    userId: "clbjcbifv00033b6nx2ni0ktz",
    viewedByAdmin: false,
    viewedByUser: false,
  },
  {
    id: "clbjhchqx000e3b6s0e3xxfzx",
    userId: "clbjcbifv00043b6n3gwnmrez",
    viewedByAdmin: true,
    viewedByUser: true,
  },
  {
    id: "clbjhchqx000f3b6syulcmh4r",
    userId: "clbjcbifv00053b6nd70hp90l",
    viewedByAdmin: false,
    viewedByUser: false,
  },
  {
    id: "clbjhchqx000g3b6sspq450xg",
    userId: "clbjcbifv00063b6nxsviffc7",
    viewedByAdmin: false,
    viewedByUser: true,
  },
  {
    id: "clbjhchqx000h3b6shg8t5ql9",
    userId: "clbjcbifv00073b6n9ywebtny",
    viewedByAdmin: true,
    viewedByUser: false,
  },
  {
    id: "clbjhchqx000i3b6sjvolrggv",
    userId: "clbjcbifv00083b6nl0q4kk3k",
    viewedByAdmin: false,
    viewedByUser: true,
  },
  {
    id: "clbjhchqx000j3b6s86fc88sw",
    userId: "clbjcbifv00093b6nd7wakt74",
    viewedByAdmin: true,
    viewedByUser: false,
  },
];
