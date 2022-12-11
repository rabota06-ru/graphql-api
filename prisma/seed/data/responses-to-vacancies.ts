import { Prisma, PrismaClient, ResponseToVacancy } from "@prisma/client";

export async function createResponsesToVacancies(prisma: PrismaClient) {
  return prisma.responseToVacancy.createMany({ data: responsesToVacancies });
}

const responsesToVacancies: Prisma.ResponseToVacancyUncheckedCreateInput[] = [
  {
    vacancyId: "clbjcn3m400003b6nnazgmgsf",
    resumeId: "clbjbs5os00003b6nngad8it2",
    coverLetter:
      "viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae,",
  },
  {
    vacancyId: "clbjcn3m400003b6nnazgmgsf",
    resumeId: "clbjbs5os00013b6nsygsgowd",
    coverLetter:
      "Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel,",
  },
  {
    vacancyId: "clbjcn3m400003b6nnazgmgsf",
    resumeId: "clbjbs5os00023b6ntdvqwslx",
    coverLetter:
      "leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
  },
  {
    vacancyId: "clbjcn3m400013b6n8ze1nlfb",
    resumeId: "clbjbs5os00023b6ntdvqwslx",
    coverLetter:
      "Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis",
  },
  {
    vacancyId: "clbjcn3m400013b6n8ze1nlfb",
    resumeId: "clbjbs5os00033b6nb5it8guj",
    coverLetter:
      "molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient",
  },
  {
    vacancyId: "clbjcn3m400023b6nigs5z50j",
    resumeId: "clbjbs5os00033b6nb5it8guj",
    coverLetter:
      "vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit.",
  },
  {
    vacancyId: "clbjcn3m400033b6n6rjdgcat",
    resumeId: "clbjbs5os00033b6nb5it8guj",
    coverLetter:
      "Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec",
  },
  {
    vacancyId: "clbjcn3m400043b6nkxqk4ccj",
    resumeId: "clbjbs5os00033b6nb5it8guj",
    coverLetter:
      "mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse",
  },
  {
    vacancyId: "clbjcn3m400043b6nkxqk4ccj",
    resumeId: "clbjbs5os00043b6n7pg9p87n",
    coverLetter:
      "vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc",
  },
  {
    vacancyId: "clbjcn3m400043b6nkxqk4ccj",
    resumeId: "clbjbs5os00053b6nswzac67z",
    coverLetter:
      "nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque,",
  },
  {
    vacancyId: "clbjcn3m400043b6nkxqk4ccj",
    resumeId: "clbjbs5os00063b6ncr8ghv2y",
    coverLetter:
      "dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed",
  },
  {
    vacancyId: "clbjcn3m400053b6nfqra6weo",
    resumeId: "clbjbs5os00073b6njawrymnj",
    coverLetter:
      "tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est",
  },
  {
    vacancyId: "clbjcn3m400063b6naghla4bc",
    resumeId: "clbjbs5os00073b6njawrymnj",
    coverLetter:
      "ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor",
  },
  {
    vacancyId: "clbjcn3m400063b6naghla4bc",
    resumeId: "clbjbs5os00083b6nx016ycmx",
    coverLetter:
      "venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra.",
  },
  {
    vacancyId: "clbjcn3m400073b6n1vlrmc7u",
    resumeId: "clbjbs5os00093b6ndtd3n05w",
    coverLetter:
      "vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel",
  },
  {
    vacancyId: "clbjcn3m400083b6nndr3i4fj",
    resumeId: "clbjbs5os000a3b6n6urvwxfq",
    coverLetter:
      "et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus",
  },
  {
    vacancyId: "clbjcn3m400083b6nndr3i4fj",
    resumeId: "clbjbs5os000b3b6nhhnco7bc",
    coverLetter:
      "facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies",
  },
  {
    vacancyId: "clbjcn3m400083b6nndr3i4fj",
    resumeId: "clbjbs5os000c3b6na7dmykla",
    coverLetter:
      "ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam",
  },
  {
    vacancyId: "clbjcn3m400093b6n214jwsv5",
    resumeId: "clbjbs5os000d3b6nl6izxqoe",
    coverLetter:
      "dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat",
  },
  {
    vacancyId: "clbjcn3m4000a3b6npd5zks9y",
    resumeId: "clbjbs5os000e3b6n8asnzeyn",
    coverLetter:
      "fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque",
  },
  {
    vacancyId: "clbjcn3m4000b3b6n98mtc1f0",
    resumeId: "clbjbs5os000f3b6n0ocrnhnx",
    coverLetter:
      "pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam",
  },
  {
    vacancyId: "clbjcn3m4000c3b6nx3hn32mu",
    resumeId: "clbjbs5os000f3b6n0ocrnhnx",
    coverLetter:
      "ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In",
  },
  {
    vacancyId: "clbjcn3m4000c3b6nx3hn32mu",
    resumeId: "clbjbs5os000g3b6nceukyq4c",
    coverLetter:
      "vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor",
  },
  {
    vacancyId: "clbjcn3m4000c3b6nx3hn32mu",
    resumeId: "clbjbs5os000h3b6ndl2m2i31",
    coverLetter:
      "sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit",
  },
  {
    vacancyId: "clbjcn3m4000d3b6ngezvtw7e",
    resumeId: "clbjbs5os000i3b6nnsdu2zr1",
    coverLetter:
      "Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam",
  },
  {
    vacancyId: "clbjcn3m4000e3b6nyedhyazy",
    resumeId: "clbjbs5os000j3b6n6vnxuvre",
    coverLetter:
      "est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu.",
  },
  {
    vacancyId: "clbjcn3m4000f3b6n1u8dl8vz",
    resumeId: "clbjbs5os000j3b6n6vnxuvre",
    coverLetter:
      "facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum.",
  },
  {
    vacancyId: "clbjcn3m4000g3b6nmjppenz0",
    resumeId: "clbjbs5os000j3b6n6vnxuvre",
    coverLetter:
      "ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio.",
  },
  {
    vacancyId: "clbjcn3m4000g3b6nmjppenz0",
    resumeId: "clbjbs5os000k3b6njrnt5jyy",
    coverLetter:
      "nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien.",
  },
  {
    vacancyId: "clbjcn3m4000g3b6nmjppenz0",
    resumeId: "clbjbs5os000k3b6njrnt5jyy",
    coverLetter:
      "elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et",
  },
];
