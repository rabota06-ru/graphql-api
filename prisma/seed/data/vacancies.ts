import { Prisma, PrismaClient } from "@prisma/client";

export async function createVacancies(prisma: PrismaClient) {
  return prisma.vacancy.createMany({ data: vacancies });
}

const vacancies: Prisma.VacancyUncheckedCreateInput[] = [
  {
    id: "clbjcn3m400003b6nnazgmgsf",
    employerId: "clbjcx1i500003b6m8ywirm3c",
    salary: 34854,
    post: "elit, pharetra",
    fieldOfActivity: 14,
    placeOfWork: 11,
    description:
      "Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non,",
    duties:
      "at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt,",
    requirements:
      "Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis",
    workingSchedule:
      "eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed,",
    phone: "+72734188611",
    phoneHidden: false,
    archived: true,
    archivedReason:
      "augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum.",
  },
  {
    id: "clbjcn3m400013b6n8ze1nlfb",
    employerId: "clbjcx1i500003b6m8ywirm3c",
    salary: 65634,
    post: "semper tellus id",
    fieldOfActivity: 8,
    placeOfWork: 20,
    description:
      "mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis",
    duties:
      "dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum",
    requirements:
      "ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus",
    workingSchedule:
      "pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet",
    phone: "+79028511910",
    phoneHidden: true,
    archived: false,
    archivedReason:
      "dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing",
  },
  {
    id: "clbjcn3m400023b6nigs5z50j",
    employerId: "clbjcx1i500013b6me8z4lo2m",
    salary: 53215,
    post: "Nunc sed orci lobortis",
    fieldOfActivity: 15,
    placeOfWork: 13,
    description:
      "quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi",
    duties:
      "semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis",
    requirements:
      "risus. Quisque libero lacus, varius et, euismod et, commodo at, libero.",
    workingSchedule:
      "malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam",
    phone: "+74721657857",
    phoneHidden: false,
    archived: false,
    archivedReason: "Sed eget lacus. Mauris non dui nec urna suscipit nonummy.",
  },
  {
    id: "clbjcn3m400033b6n6rjdgcat",
    employerId: "clbjcx1i500023b6mivy0pa27",
    salary: 15281,
    post: "nulla at",
    fieldOfActivity: 13,
    placeOfWork: 11,
    description:
      "Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis",
    duties:
      "nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce",
    requirements:
      "a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam",
    workingSchedule:
      "gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor.",
    phone: "+73549466848",
    phoneHidden: true,
    archived: false,
    archivedReason:
      "aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis",
  },
  {
    id: "clbjcn3m400043b6nkxqk4ccj",
    employerId: "clbjcx1i500023b6mivy0pa27",
    salary: 85454,
    post: "mauris sagittis",
    fieldOfActivity: 5,
    placeOfWork: 8,
    description:
      "adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor.",
    duties:
      "semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem",
    requirements:
      "consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae",
    workingSchedule:
      "nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum",
    phone: "+74863025366",
    phoneHidden: true,
    archived: true,
    archivedReason:
      "eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit",
  },
  {
    id: "clbjcn3m400053b6nfqra6weo",
    employerId: "clbjcx1i500023b6mivy0pa27",
    salary: 45073,
    post: "Phasellus nulla. Integer",
    fieldOfActivity: 15,
    placeOfWork: 14,
    description:
      "ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna",
    duties:
      "odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor.",
    requirements:
      "erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In",
    workingSchedule:
      "Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius",
    phone: "+79691571663",
    phoneHidden: true,
    archived: false,
    archivedReason:
      "Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit",
  },
  {
    id: "clbjcn3m400063b6naghla4bc",
    employerId: "clbjcx1i500033b6mna3r0hjq",
    salary: 34093,
    post: "nunc ac mattis ornare, lectus ante",
    fieldOfActivity: 7,
    placeOfWork: 15,
    description:
      "a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar",
    duties:
      "nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus.",
    requirements:
      "neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue",
    workingSchedule:
      "ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris",
    phone: "+77055326583",
    phoneHidden: true,
    archived: true,
    archivedReason:
      "cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis",
  },
  {
    id: "clbjcn3m400073b6n1vlrmc7u",
    employerId: "clbjcx1i500033b6mna3r0hjq",
    salary: 53726,
    post: "ante lectus convallis est,",
    fieldOfActivity: 2,
    placeOfWork: 20,
    description:
      "justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit,",
    duties:
      "Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit",
    requirements:
      "arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec",
    workingSchedule:
      "ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis",
    phone: "+75534224592",
    phoneHidden: true,
    archived: true,
    archivedReason: "nisl arcu iaculis enim, sit amet ornare lectus justo eu",
  },
  {
    id: "clbjcn3m400083b6nndr3i4fj",
    employerId: "clbjcx1i500033b6mna3r0hjq",
    salary: 51984,
    post: "elit, pharetra ut,",
    fieldOfActivity: 4,
    placeOfWork: 3,
    description:
      "nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum",
    duties:
      "Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu.",
    requirements:
      "molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo.",
    workingSchedule:
      "urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    phone: "+74764183454",
    phoneHidden: true,
    archived: true,
    archivedReason:
      "luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae",
  },
  {
    id: "clbjcn3m400093b6n214jwsv5",
    employerId: "clbjcx1i500033b6mna3r0hjq",
    salary: 34969,
    post: "nisi a odio semper cursus. Integer",
    fieldOfActivity: 4,
    placeOfWork: 15,
    description:
      "Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare",
    duties:
      "sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero",
    requirements:
      "non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
    workingSchedule:
      "quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu,",
    phone: "+73519537881",
    phoneHidden: true,
    archived: false,
    archivedReason: "Fusce aliquet magna a neque. Nullam ut nisi a odio",
  },
  {
    id: "clbjcn3m4000a3b6npd5zks9y",
    employerId: "clbjcx1i500033b6mna3r0hjq",
    salary: 93757,
    post: "Duis ac arcu. Nunc",
    fieldOfActivity: 6,
    placeOfWork: 7,
    description:
      "arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed",
    duties:
      "iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla",
    requirements:
      "Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci",
    workingSchedule:
      "ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla",
    phone: "+75624138785",
    phoneHidden: true,
    archived: false,
    archivedReason:
      "Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis",
  },
  {
    id: "clbjcn3m4000b3b6n98mtc1f0",
    employerId: "clbjcx1i500043b6mpdr53bcw",
    salary: 32812,
    post: "Cras vehicula",
    fieldOfActivity: 21,
    placeOfWork: 18,
    description:
      "malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus.",
    duties:
      "sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante",
    requirements:
      "et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed",
    workingSchedule:
      "commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo",
    phone: "+78714965833",
    phoneHidden: true,
    archived: false,
    archivedReason:
      "eu nulla at sem molestie sodales. Mauris blandit enim consequat",
  },
  {
    id: "clbjcn3m4000c3b6nx3hn32mu",
    employerId: "clbjcx1i500043b6mpdr53bcw",
    salary: 94470,
    post: "lectus pede et risus.",
    fieldOfActivity: 20,
    placeOfWork: 9,
    description:
      "posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim nisl",
    duties:
      "ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet,",
    requirements:
      "eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna",
    workingSchedule:
      "mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec,",
    phone: "+71866826264",
    phoneHidden: false,
    archived: false,
    archivedReason:
      "mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus",
  },
  {
    id: "clbjcn3m4000d3b6ngezvtw7e",
    employerId: "clbjcx1i500053b6msazxc12g",
    salary: 77571,
    post: "porttitor scelerisque neque.",
    fieldOfActivity: 9,
    placeOfWork: 11,
    description:
      "venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum",
    duties:
      "venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia",
    requirements:
      "scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae,",
    workingSchedule:
      "luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et",
    phone: "+73778147534",
    phoneHidden: true,
    archived: false,
    archivedReason:
      "metus urna convallis erat, eget tincidunt dui augue eu tellus.",
  },
  {
    id: "clbjcn3m4000e3b6nyedhyazy",
    employerId: "clbjcx1i500053b6msazxc12g",
    salary: 79501,
    post: "mus. Proin",
    fieldOfActivity: 20,
    placeOfWork: 15,
    description:
      "gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna.",
    duties:
      "Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet,",
    requirements:
      "rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet,",
    workingSchedule:
      "malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna.",
    phone: "+78999729797",
    phoneHidden: false,
    archived: false,
    archivedReason:
      "Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus.",
  },
  {
    id: "clbjcn3m4000f3b6n1u8dl8vz",
    employerId: "clbjcx1i500053b6msazxc12g",
    salary: 16117,
    post: "mollis vitae, posuere at,",
    fieldOfActivity: 19,
    placeOfWork: 15,
    description:
      "orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis",
    duties:
      "quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut",
    requirements:
      "tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt,",
    workingSchedule:
      "luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor",
    phone: "+79252918921",
    phoneHidden: false,
    archived: false,
    archivedReason:
      "magna. Nam ligula elit, pretium et, rutrum non, hendrerit id,",
  },
  {
    id: "clbjcn3m4000g3b6nmjppenz0",
    employerId: "clbjcx1i500063b6mxrby75vw",
    salary: 15211,
    post: "lobortis ultrices. Vivamus rhoncus. Donec",
    fieldOfActivity: 4,
    placeOfWork: 13,
    description:
      "tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam",
    duties:
      "pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur",
    requirements:
      "Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis",
    workingSchedule:
      "tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam",
    phone: "+78384252670",
    phoneHidden: false,
    archived: false,
    archivedReason:
      "libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus",
  },
  {
    id: "clbjcn3m4000h3b6nbiwy6suu",
    employerId: "clbjcx1i500063b6mxrby75vw",
    salary: 61582,
    post: "Nunc pulvinar arcu et pede.",
    fieldOfActivity: 9,
    placeOfWork: 12,
    description:
      "eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing,",
    duties:
      "Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede.",
    requirements:
      "et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet,",
    workingSchedule:
      "sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus",
    phone: "+72586057846",
    phoneHidden: true,
    archived: false,
    archivedReason:
      "mi tempor lorem, eget mollis lectus pede et risus. Quisque",
  },
  {
    id: "clbjcn3m4000i3b6nx4dxi7wq",
    employerId: "clbjcx1i500073b6m323zq2fi",
    salary: 83891,
    post: "libero est, congue a, aliquet vel,",
    fieldOfActivity: 17,
    placeOfWork: 17,
    description:
      "nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac",
    duties:
      "Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam",
    requirements:
      "luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus",
    workingSchedule:
      "eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec",
    phone: "+76467756776",
    phoneHidden: false,
    archived: false,
    archivedReason: "enim, gravida sit amet, dapibus id, blandit at, nisi. Cum",
  },
  {
    id: "clbjcn3m4000j3b6n98mm0buv",
    employerId: "clbjcx1i500083b6mqr84mene",
    salary: 53239,
    post: "Pellentesque habitant morbi",
    fieldOfActivity: 12,
    placeOfWork: 6,
    description:
      "nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus",
    duties:
      "lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna.",
    requirements:
      "lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi",
    workingSchedule:
      "Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus",
    phone: "+71317181670",
    phoneHidden: false,
    archived: false,
    archivedReason:
      "eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula.",
  },
  {
    id: "clbjcn3m4000k3b6n6h013ipv",
    employerId: "clbjcx1i500083b6mqr84mene",
    salary: 14206,
    post: "sapien. Nunc pulvinar arcu et",
    fieldOfActivity: 17,
    placeOfWork: 7,
    description:
      "nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet",
    duties:
      "quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris.",
    requirements:
      "et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel,",
    workingSchedule:
      "vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer",
    phone: "+77385326684",
    phoneHidden: false,
    archived: true,
    archivedReason:
      "urna justo faucibus lectus, a sollicitudin orci sem eget massa.",
  },
  {
    id: "clbjcn3m4000l3b6n50b3bpbx",
    employerId: "clbjcx1i500093b6my2gnse3s",
    salary: 33325,
    post: "eros non enim commodo",
    fieldOfActivity: 15,
    placeOfWork: 16,
    description:
      "euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla",
    duties:
      "Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo.",
    requirements:
      "Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed",
    workingSchedule:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor",
    phone: "+72643082245",
    phoneHidden: false,
    archived: true,
    archivedReason:
      "turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla",
  },
  {
    id: "clbjcn3m4000m3b6n2qje7o1c",
    employerId: "clbjcx1i500093b6my2gnse3s",
    salary: 82463,
    post: "et nunc. Quisque ornare tortor",
    fieldOfActivity: 13,
    placeOfWork: 19,
    description:
      "hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui",
    duties:
      "ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem",
    requirements:
      "ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat",
    workingSchedule:
      "a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc",
    phone: "+75347148207",
    phoneHidden: true,
    archived: false,
    archivedReason:
      "arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida",
  },
  {
    id: "clbjcn3m4000n3b6nw1o3fsvh",
    employerId: "clbjcx1i500093b6my2gnse3s",
    salary: 52759,
    post: "Aenean massa.",
    fieldOfActivity: 6,
    placeOfWork: 2,
    description:
      "Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque",
    duties:
      "elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus.",
    requirements:
      "dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus",
    workingSchedule:
      "pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec",
    phone: "+74743838254",
    phoneHidden: false,
    archived: true,
    archivedReason:
      "eu, ultrices sit amet, risus. Donec nibh enim, gravida sit",
  },
  {
    id: "clbjcn3m4000o3b6nph3ypge7",
    employerId: "clbjcx1i5000a3b6m30o84mz4",
    salary: 65893,
    post: "ultricies sem magna nec quam. Curabitur",
    fieldOfActivity: 16,
    placeOfWork: 3,
    description:
      "dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    duties:
      "pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu",
    requirements:
      "tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus",
    workingSchedule:
      "mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna,",
    phone: "+78246155072",
    phoneHidden: true,
    archived: false,
    archivedReason: "mi, ac mattis velit justo nec ante. Maecenas mi felis,",
  },
  {
    id: "clbjcn3m4000p3b6n8y1l8xe2",
    employerId: "clbjcx1i5000b3b6mvquy16tb",
    salary: 34803,
    post: "dolor egestas rhoncus. Proin nisl",
    fieldOfActivity: 5,
    placeOfWork: 3,
    description:
      "dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus",
    duties:
      "Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci.",
    requirements:
      "Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus",
    workingSchedule:
      "purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit",
    phone: "+76295656846",
    phoneHidden: false,
    archived: true,
    archivedReason:
      "nibh enim, gravida sit amet, dapibus id, blandit at, nisi.",
  },
  {
    id: "clbjcn3m4000q3b6nijqmt75p",
    employerId: "clbjcx1i5000b3b6mvquy16tb",
    salary: 36021,
    post: "ullamcorper. Duis at lacus. Quisque purus",
    fieldOfActivity: 19,
    placeOfWork: 7,
    description:
      "ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse",
    duties:
      "sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras",
    requirements:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu",
    workingSchedule:
      "molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus",
    phone: "+70535705487",
    phoneHidden: true,
    archived: false,
    archivedReason: "In at pede. Cras vulputate velit eu sem. Pellentesque ut",
  },
  {
    id: "clbjcn3m4000r3b6nsh1b99dy",
    employerId: "clbjcx1i5000b3b6mvquy16tb",
    salary: 64335,
    post: "ipsum. Phasellus",
    fieldOfActivity: 12,
    placeOfWork: 2,
    description:
      "tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque",
    duties:
      "purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras",
    requirements:
      "lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus",
    workingSchedule:
      "imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non",
    phone: "+78033403645",
    phoneHidden: false,
    archived: false,
    archivedReason: "erat. Sed nunc est, mollis non, cursus non, egestas a,",
  },
  {
    id: "clbjcn3m4000s3b6nfuobpuim",
    employerId: "clbjcx1i5000c3b6mnj3bt06i",
    salary: 93257,
    post: "Suspendisse ac metus vitae",
    fieldOfActivity: 4,
    placeOfWork: 2,
    description:
      "Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna",
    duties:
      "lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis",
    requirements:
      "in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In",
    workingSchedule:
      "sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam",
    phone: "+75185833071",
    phoneHidden: false,
    archived: true,
    archivedReason:
      "placerat, augue. Sed molestie. Sed id risus quis diam luctus",
  },
  {
    id: "clbjcn3m4000t3b6nli6cnqgy",
    employerId: "clbjcx1i5000c3b6mnj3bt06i",
    salary: 78870,
    post: "Ut tincidunt vehicula risus.",
    fieldOfActivity: 15,
    placeOfWork: 20,
    description:
      "amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat.",
    duties:
      "a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis",
    requirements:
      "eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem",
    workingSchedule:
      "nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies",
    phone: "+74735910524",
    phoneHidden: false,
    archived: false,
    archivedReason:
      "nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent",
  },
];
