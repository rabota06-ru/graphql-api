import { PrismaClient, Prisma } from "@prisma/client";
import { EmployerProfile } from "../../generated";

export async function createEmployerProfiles(prisma: PrismaClient) {
  return prisma.employerProfile.createMany({ data: employerProfiles });
}

const employerProfiles: Prisma.EmployerProfileUncheckedCreateInput[] = [
  {
    id: "clbjcx1i500003b6m8ywirm3c",
    userId: "clbj9ffhy00023b6nnjdiemg8",
    companyName: "Proin Vel Nisl Ltd",
    description: "dui",
  },
  {
    id: "clbjcx1i500013b6me8z4lo2m",
    userId: "clbj9ffhy00033b6nwwj24hfo",
    companyName: "Nam Porttitor Scelerisque Ltd",
    description:
      "semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui,",
  },
  {
    id: "clbjcx1i500023b6mivy0pa27",
    userId: "clbj9ffhy00063b6ncirpdkzd",
    companyName: "Enim Consequat Purus Ltd",
    description: "amet, faucibus ut, nulla. Cras eu tellus eu augue",
  },
  {
    id: "clbjcx1i500033b6mna3r0hjq",
    userId: "clbj9ffhy00073b6naiow6efi",
    companyName: "Nisl Quisque Incorporated",
    description:
      "Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus.",
  },
  {
    userId: "clbj9ffhy000a3b6n92quybjr",
    companyName: "Rutrum Urna Nec Company",
    description:
      "fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas",
    id: "clbjcx1i500043b6mpdr53bcw",
  },
  {
    userId: "clbj9ffhy000b3b6n96ib3z8k",
    companyName: "Nec Orci LLC",
    description:
      "hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu",
    id: "clbjcx1i500053b6msazxc12g",
  },
  {
    userId: "clbj9ffhy000e3b6nqreket7j",
    companyName: "Nunc Sed Associates",
    description: "urna. Nullam lobortis quam",
    id: "clbjcx1i500063b6mxrby75vw",
  },
  {
    userId: "clbj9ffhy000f3b6nm0u4b899",
    companyName: "Ullamcorper Duis Incorporated",
    description:
      "arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non,",
    id: "clbjcx1i500073b6m323zq2fi",
  },
  {
    userId: "clbj9ffhy000i3b6nm2cq7pur",
    companyName: "Vel Convallis In Institute",
    description:
      "ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus.",
    id: "clbjcx1i500083b6mqr84mene",
  },
  {
    userId: "clbj9ffhy000j3b6nwlqlsobr",
    companyName: "Interdum Ligula Industries",
    description:
      "ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a,",
    id: "clbjcx1i500093b6my2gnse3s",
  },
  {
    userId: "clbj9ffhy000m3b6n3gfy1awi",
    companyName: "Interdum Feugiat Sed Industries",
    description:
      "Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy",
    id: "clbjcx1i5000a3b6m30o84mz4",
  },
  {
    userId: "clbj9ffhy000n3b6nnjjengnk",
    companyName: "Venenatis Lacus Industries",
    description:
      "a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque",
    id: "clbjcx1i5000b3b6mvquy16tb",
  },
  {
    userId: "clbj9ffhy000q3b6n948aiye6",
    companyName: "Placerat Velit Quisque Incorporated",
    description:
      "quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam",
    id: "clbjcx1i5000c3b6mnj3bt06i",
  },
  {
    userId: "clbj9ffhy000r3b6nt2xtq10y",
    companyName: "Lorem Eu LLP",
    description:
      "Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien.",
    id: "clbjcx1i5000d3b6mcjd5lvzm",
  },
  {
    userId: "clbjb9ugx00003b6nm14ckl4j",
    companyName: "Lobortis Quam Incorporated",
    description:
      "Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus",
    id: "clbjcx1i5000e3b6m979xjmwu",
  },
  {
    userId: "clbjb9ugx00013b6naac5fe5i",
    companyName: "Ut Erat Associates",
    description:
      "tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla",
    id: "clbjcx1i5000f3b6mxgsbm9hl",
  },
  {
    userId: "clbjb9ugx00023b6ndvaunoai",
    companyName: "Ornare Sagittis PC",
    description:
      "tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis.",
    id: "clbjcx1i5000g3b6m134mq5yi",
  },
  {
    userId: "clbjb9ugx00033b6n6aong3bk",
    companyName: "Blandit Mattis Foundation",
    description:
      "quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit",
    id: "clbjcx1i5000h3b6mmhuiwzi3",
  },
  {
    userId: "clbjb9ugx00043b6n2aaplv1p",
    companyName: "Egestas A Institute",
    description:
      "sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem",
    id: "clbjcx1i5000i3b6mnnpeh9ul",
  },
  {
    userId: "clbjb9ugx00053b6n2ad2z495",
    companyName: "Vestibulum Neque Associates",
    description:
      "mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida",
    id: "clbjcx1i5000j3b6m5qoaahq9",
  },
  {
    userId: "clbjb9ugx00063b6nto4u1cwj",
    companyName: "Nec Mollis Company",
    description:
      "Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt",
    id: "clbjcx1i5000k3b6my6e26ugm",
  },
  {
    userId: "clbjb9ugx00073b6nsfxckxqo",
    companyName: "Cras Lorem Lorem LLP",
    description:
      "luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis",
    id: "clbjcx1i5000l3b6mhueqb6gh",
  },
  {
    userId: "clbjb9ugx00083b6n4058ukhc",
    companyName: "Venenatis Incorporated",
    description:
      "Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio",
    id: "clbjcx1i5000m3b6mn40x6avx",
  },
  {
    userId: "clbjb9ugx00093b6nyyy5gbfq",
    companyName: "Nec Limited",
    description: "semper cursus. Integer mollis. Integer tincidunt aliquam",
    id: "clbjcx1i5000n3b6mfbr8mvic",
  },
  {
    userId: "clbjb9ugx000a3b6n9zb4r0qq",
    companyName: "Pretium Et Limited",
    description:
      "fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient",
    id: "clbjcx1i5000o3b6m7m1vq313",
  },
  {
    userId: "clbjb9ugx000b3b6nqakn2pfw",
    companyName: "Enim Consequat Inc.",
    description:
      "elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in",
    id: "clbjcx1i5000p3b6mv96wys0f",
  },
  {
    userId: "clbjb9ugx000c3b6nldc6fi34",
    companyName: "Massa Quisque Porttitor LLP",
    description: "convallis convallis",
    id: "clbjcx1i5000q3b6mnniz1c0e",
  },
  {
    userId: "clbjb9ugx000d3b6nikuvp148",
    companyName: "Pellentesque Habitant Consulting",
    description:
      "pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam",
    id: "clbjcx1i5000r3b6mzob1b3cs",
  },
  {
    userId: "clbjb9ugx000e3b6nwuigoot6",
    companyName: "Aliquet Company",
    description:
      "Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue",
    id: "clbjcx1i5000s3b6mmft4hi2d",
  },
  {
    userId: "clbjb9ugx001v3b6noknhr5w9",
    companyName: "Faucibus Morbi Institute",
    description:
      "ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec,",
    id: "clbjcx1i5000t3b6mtyf78fp8",
  },
];
