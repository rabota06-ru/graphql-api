import { PrismaClient, User, UserRole, Prisma } from "@prisma/client";

export async function createUsers(prisma: PrismaClient) {
  return prisma.user.createMany({ data: users });
}

const users: Prisma.UserCreateInput[] = [
  {
    id: "clbjcbifv00003b6n3cvvgrxt",
    login: "Sophia Christian",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00013b6nfvof4lp9",
    login: "Lance Duke",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00023b6nrof4g07l",
    login: "Caldwell House",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00033b6nx2ni0ktz",
    login: "Abel Trevino",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00043b6n3gwnmrez",
    login: "Alfonso Boyd",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00053b6nd70hp90l",
    login: "Lesley Merrill",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00063b6nxsviffc7",
    login: "Cairo Meadows",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00073b6n9ywebtny",
    login: "Brooke Roman",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00083b6nl0q4kk3k",
    login: "Clark Eaton",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv00093b6nd7wakt74",
    login: "Malik Doyle",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv000a3b6nk3cklc0y",
    login: "Donna Soto",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv000b3b6n1xhpkdlf",
    login: "Burke Hansen",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv000c3b6nb1b1mulq",
    login: "Buckminster Robertson",
    role: UserRole.Applicant,
  },
  {
    id: "clbjcbifv000d3b6n59w0s6c1",
    login: "Kasimir Heath",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy00003b6n7j7vxitq",
    login: "Buckminster Marks",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy00013b6nme4v2wwe",
    login: "Bell Hull",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy00023b6nnjdiemg8",
    login: "Florence Craig",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy00033b6nwwj24hfo",
    login: "Xantha Romero",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy00043b6nomf3ur4m",
    login: "Dana Valentine",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy00053b6n0lk42cu5",
    login: "Brennan Collins",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy00063b6ncirpdkzd",
    login: "Jackson Day",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy00073b6naiow6efi",
    login: "Isaac Morrison",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy00083b6ney2ta63r",
    login: "Melyssa Brooks",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy00093b6nuooek31b",
    login: "Demetria Dejesus",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000a3b6n92quybjr",
    login: "Marvin Lucas",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000b3b6n96ib3z8k",
    login: "Hyatt Dorsey",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000c3b6nm88od9o9",
    login: "Larissa Mullins",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000d3b6nn949chfp",
    login: "Russell Richard",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000e3b6nqreket7j",
    login: "Shad Spears",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000f3b6nm0u4b899",
    login: "Mason Gardner",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000g3b6nrtmco8gy",
    login: "Amos Conley",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000h3b6nhe596jo4",
    login: "Karen Gates",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000i3b6nm2cq7pur",
    login: "Shana Garrison",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000j3b6nwlqlsobr",
    login: "Zelda Collier",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000k3b6nnpeeq2f4",
    login: "Meredith Richmond",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000l3b6n0y00e3be",
    login: "Ivan Sawyer",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000m3b6n3gfy1awi",
    login: "Rafael Baxter",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000n3b6nnjjengnk",
    login: "Iola Alexander",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000o3b6nq3s8cagj",
    login: "Pascale Kelley",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000p3b6nvdnykn12",
    login: "Margaret Parker",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000q3b6n948aiye6",
    login: "Hedley Carroll",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000r3b6nt2xtq10y",
    login: "Dieter Little",
    role: UserRole.Employer,
  },
  {
    id: "clbj9ffhy000s3b6nl3lv3bes",
    login: "Ariel Chapman",
    role: UserRole.Applicant,
  },
  {
    id: "clbj9ffhy000t3b6nk0ck64fc",
    login: "Hamilton Watson",
    role: UserRole.Applicant,
  },
  {
    id: "clbjb9ugx00003b6nm14ckl4j",
    login: "Emerson Salazar",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx00013b6naac5fe5i",
    login: "Brenden Fowler",
    role: UserRole.Employer,
  },

  {
    id: "clbjb9ugx00023b6ndvaunoai",
    login: "Mohammad Nunez",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx00033b6n6aong3bk",
    login: "Donna Long",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx00043b6n2aaplv1p",
    login: "Mary Morrow",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx00053b6n2ad2z495",
    login: "Eugenia Little",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx00063b6nto4u1cwj",
    login: "Tallulah Hubbard",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx00073b6nsfxckxqo",
    login: "Destiny Glover",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx00083b6n4058ukhc",
    login: "Sara Mccall",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx00093b6nyyy5gbfq",
    login: "Rama Howard",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx000a3b6n9zb4r0qq",
    login: "Keefe Booth",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx000b3b6nqakn2pfw",
    login: "Hilda Gallegos",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx000c3b6nldc6fi34",
    login: "Clarke Ingram",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx000d3b6nikuvp148",
    login: "Ira Hartman",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx000e3b6nwuigoot6",
    login: "Whitney Holmes",
    role: UserRole.Employer,
  },
  {
    id: "clbjb9ugx001v3b6noknhr5w9",
    login: "Nita Hunt",
    role: UserRole.Employer,
  },
];
