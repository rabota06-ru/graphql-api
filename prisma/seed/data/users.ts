import { PrismaClient, User, UserRole, Prisma } from "@prisma/client";

export async function createUsers(prisma: PrismaClient) {
  return prisma.user.createMany({ data: users });
}

const users: Prisma.UserCreateInput[] = [
  {
    id: "clbjcbifv00003b6n3cvvgrxt",
    login: "+72298157141",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00013b6nfvof4lp9",
    login: "+75008293725",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00023b6nrof4g07l",
    login: "+74795653523",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00033b6nx2ni0ktz",
    login: "+70417252517",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00043b6n3gwnmrez",
    login: "+71457610770",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00053b6nd70hp90l",
    login: "+73454112711",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00063b6nxsviffc7",
    login: "+74216255415",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00073b6n9ywebtny",
    login: "+76236442851",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00083b6nl0q4kk3k",
    login: "+76287215645",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00093b6nd7wakt74",
    login: "+77388925646",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv000a3b6nk3cklc0y",
    login: "+74026806797",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv000b3b6n1xhpkdlf",
    login: "+78574120705",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv000c3b6nb1b1mulq",
    login: "+72755233075",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv000d3b6n59w0s6c1",
    login: "+77463652733",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy00003b6n7j7vxitq",
    login: "+71842460211",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy00013b6nme4v2wwe",
    login: "+77765174934",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy00023b6nnjdiemg8",
    login: "+78607673872",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy00033b6nwwj24hfo",
    login: "+73688760448",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy00043b6nomf3ur4m",
    login: "+70336285403",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy00053b6n0lk42cu5",
    login: "+77939743277",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy00063b6ncirpdkzd",
    login: "+79380879227",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy00073b6naiow6efi",
    login: "+75532969136",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy00083b6ney2ta63r",
    login: "+72416749313",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy00093b6nuooek31b",
    login: "+75166287806",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000a3b6n92quybjr",
    login: "+78428174860",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000b3b6n96ib3z8k",
    login: "+78318328946",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000c3b6nm88od9o9",
    login: "+73527427540",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000d3b6nn949chfp",
    login: "+75801473862",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000e3b6nqreket7j",
    login: "+71883746757",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000f3b6nm0u4b899",
    login: "+78271344888",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000g3b6nrtmco8gy",
    login: "+72693685717",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000h3b6nhe596jo4",
    login: "+74719193557",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000i3b6nm2cq7pur",
    login: "+73135285234",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000j3b6nwlqlsobr",
    login: "+78174535022",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000k3b6nnpeeq2f4",
    login: "+70432717388",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000l3b6n0y00e3be",
    login: "+75308358268",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000m3b6n3gfy1awi",
    login: "+74337291752",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000n3b6nnjjengnk",
    login: "+74617436445",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000o3b6nq3s8cagj",
    login: "+78826256785",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000p3b6nvdnykn12",
    login: "+79841633373",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000q3b6n948aiye6",
    login: "+78257876572",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000r3b6nt2xtq10y",
    login: "+73908112489",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000s3b6nl3lv3bes",
    login: "+75530822531",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000t3b6nk0ck64fc",
    login: "+75732034162",
    role: UserRole.Applicant,
  },
  {
    id: "clbjb9ugx00003b6nm14ckl4j",
    login: "+74892522428",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx00013b6naac5fe5i",
    login: "+78661714852",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx00023b6ndvaunoai",
    login: "+76836237643",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx00033b6n6aong3bk",
    login: "+76813324480",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx00043b6n2aaplv1p",
    login: "+73921367724",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx00053b6n2ad2z495",
    login: "+75693371207",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx00063b6nto4u1cwj",
    login: "+73293268013",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx00073b6nsfxckxqo",
    login: "+78017692538",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx00083b6n4058ukhc",
    login: "+76174269084",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx00093b6nyyy5gbfq",
    login: "+77411748318",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx000a3b6n9zb4r0qq",
    login: "+76315677683",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx000b3b6nqakn2pfw",
    login: "+75408687484",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx000c3b6nldc6fi34",
    login: "+73325786775",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx000d3b6nikuvp148",
    login: "+71123505024",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx000e3b6nwuigoot6",
    login: "+71294364555",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx001v3b6noknhr5w9",
    login: "+72714060131",
    role: UserRole.Employer,
  },
];
