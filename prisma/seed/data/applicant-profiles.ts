import { PrismaClient, ApplicantProfile, Prisma } from "@prisma/client";

export async function createApplicantProfiles(prisma: PrismaClient) {
  return prisma.applicantProfile.createMany({ data: applicantProfiles });
}

const applicantProfiles: Prisma.ApplicantProfileUncheckedCreateInput[] = [
  {
    id: "clbjbxgdy00003b6nh3hhp276",
    userId: "clbj9ffhy00003b6n7j7vxitq",
  },
  {
    id: "clbjbxgdy00013b6n0pxixvy9",
    userId: "clbj9ffhy00013b6nme4v2wwe",
  },
  {
    id: "clbjbxgdy00023b6n1q36zmip",
    userId: "clbj9ffhy00043b6nomf3ur4m",
  },
  {
    id: "clbjbxgdy00033b6nyblb8sx4",
    userId: "clbj9ffhy00053b6n0lk42cu5",
  },
  {
    id: "clbjbxgdy00043b6noqnkf4a2",
    userId: "clbj9ffhy00083b6ney2ta63r",
  },
  {
    id: "clbjbxgdy00063b6nupvrbv2e",
    userId: "clbj9ffhy00093b6nuooek31b",
  },
  {
    id: "clbjbxgdy00073b6nmt2n4ich",
    userId: "clbj9ffhy000c3b6nm88od9o9",
  },
  {
    id: "clbjbxgdy00083b6nlxby561h",
    userId: "clbj9ffhy000d3b6nn949chfp",
  },
  {
    id: "clbjbxgdy00093b6nddpps1y4",
    userId: "clbj9ffhy000g3b6nrtmco8gy",
  },
  {
    id: "clbjbxgdy000a3b6n55rb8bek",
    userId: "clbj9ffhy000h3b6nhe596jo4",
  },
  {
    id: "clbjbxgdy000b3b6nselmc64j",
    userId: "clbj9ffhy000k3b6nnpeeq2f4",
  },
  {
    id: "clbjbxgdy000c3b6n3urb6z7a",
    userId: "clbj9ffhy000l3b6n0y00e3be",
  },
  {
    id: "clbjbxgdy000d3b6n73krltfe",
    userId: "clbj9ffhy000o3b6nq3s8cagj",
  },
  {
    id: "clbjbxgdy000e3b6nmkp7io0b",
    userId: "clbj9ffhy000p3b6nvdnykn12",
  },
  {
    id: "clbjbxgdy000f3b6nlmm68bki",
    userId: "clbj9ffhy000s3b6nl3lv3bes",
  },
  {
    id: "clbjbxgdy000g3b6n1rrd4ruz",
    userId: "clbj9ffhy000t3b6nk0ck64fc",
  },
  {
    id: "clbjj2btb00003b6n6246xd4q",
    userId: "clbjcbifv00003b6n3cvvgrxt",
  },
  {
    id: "clbjj2btb00013b6nmjb8q41l",
    userId: "clbjcbifv00013b6nfvof4lp9",
  },
  {
    id: "clbjj2btb00023b6n7ep9mrek",
    userId: "clbjcbifv00023b6nrof4g07l",
  },
  {
    id: "clbjj2btb00033b6nnb0r6r85",
    userId: "clbjcbifv00033b6nx2ni0ktz",
  },
  {
    id: "clbjj2btb00043b6n9gku03nc",
    userId: "clbjcbifv00043b6n3gwnmrez",
  },
  {
    id: "clbjj2btb00053b6nb752dkd7",
    userId: "clbjcbifv00053b6nd70hp90l",
  },
  {
    id: "clbjj2btb00063b6nbo47w2gs",
    userId: "clbjcbifv00063b6nxsviffc7",
  },
  {
    id: "clbjj2btb00073b6nsmamulkd",
    userId: "clbjcbifv00073b6n9ywebtny",
  },
  {
    id: "clbjj2btb00083b6nhrk0hl2n",
    userId: "clbjcbifv00083b6nl0q4kk3k",
  },
  {
    id: "clbjj2btb00093b6n82mcpa21",
    userId: "clbjcbifv00093b6nd7wakt74",
  },
  {
    id: "clbjj2btb000a3b6nm6grm8hx",
    userId: "clbjcbifv000a3b6nk3cklc0y",
  },
  {
    id: "clbjj2btb000b3b6njwqcq6fm",
    userId: "clbjcbifv000b3b6n1xhpkdlf",
  },
  {
    id: "clbjj2btb000c3b6nahxdusj5",
    userId: "clbjcbifv000c3b6nb1b1mulq",
  },
  {
    id: "clbjj2btb000d3b6nd6agg1zw",
    userId: "clbjcbifv000d3b6n59w0s6c1",
  },
];
