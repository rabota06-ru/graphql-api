import { InvitationToVacancy, Prisma, PrismaClient } from "@prisma/client";

export async function createInvitationsToVacancies(prisma: PrismaClient) {
  return prisma.invitationToVacancy.createMany({
    data: invitationsToVacancies,
  });
}

const invitationsToVacancies: Prisma.InvitationToVacancyUncheckedCreateInput[] =
  [
    {
      vacancyId: "clbjcn3m400003b6nnazgmgsf",
      resumeId: "clbjbs5os00003b6nngad8it2",
      coverLetter:
        "nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc",
    },
    {
      vacancyId: "clbjcn3m400003b6nnazgmgsf",
      resumeId: "clbjbs5os00013b6nsygsgowd",
      coverLetter:
        "vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu",
    },
    {
      vacancyId: "clbjcn3m400003b6nnazgmgsf",
      resumeId: "clbjbs5os00023b6ntdvqwslx",
      coverLetter:
        "Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc",
    },
    {
      vacancyId: "clbjcn3m400013b6n8ze1nlfb",
      resumeId: "clbjbs5os00023b6ntdvqwslx",
      coverLetter:
        "Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales",
    },
    {
      vacancyId: "clbjcn3m400013b6n8ze1nlfb",
      resumeId: "clbjbs5os00033b6nb5it8guj",
      coverLetter:
        "sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
    },
    {
      vacancyId: "clbjcn3m400023b6nigs5z50j",
      resumeId: "clbjbs5os00033b6nb5it8guj",
      coverLetter:
        "eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit",
    },
    {
      vacancyId: "clbjcn3m400033b6n6rjdgcat",
      resumeId: "clbjbs5os00033b6nb5it8guj",
      coverLetter:
        "urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique",
    },
    {
      vacancyId: "clbjcn3m400043b6nkxqk4ccj",
      resumeId: "clbjbs5os00033b6nb5it8guj",
      coverLetter:
        "aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula",
    },
    {
      vacancyId: "clbjcn3m400043b6nkxqk4ccj",
      resumeId: "clbjbs5os00043b6n7pg9p87n",
      coverLetter:
        "eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non",
    },
    {
      vacancyId: "clbjcn3m400043b6nkxqk4ccj",
      resumeId: "clbjbs5os00053b6nswzac67z",
      coverLetter:
        "nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida.",
    },
    {
      vacancyId: "clbjcn3m400043b6nkxqk4ccj",
      resumeId: "clbjbs5os00063b6ncr8ghv2y",
      coverLetter:
        "malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo.",
    },
    {
      vacancyId: "clbjcn3m400053b6nfqra6weo",
      resumeId: "clbjbs5os00073b6njawrymnj",
      coverLetter:
        "risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie",
    },
    {
      vacancyId: "clbjcn3m400063b6naghla4bc",
      resumeId: "clbjbs5os00073b6njawrymnj",
      coverLetter:
        "lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque",
    },
    {
      vacancyId: "clbjcn3m400063b6naghla4bc",
      resumeId: "clbjbs5os00083b6nx016ycmx",
      coverLetter:
        "vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis",
    },
    {
      vacancyId: "clbjcn3m400073b6n1vlrmc7u",
      resumeId: "clbjbs5os00093b6ndtd3n05w",
      coverLetter:
        "sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci.",
    },
    {
      vacancyId: "clbjcn3m400083b6nndr3i4fj",
      resumeId: "clbjbs5os000a3b6n6urvwxfq",
      coverLetter:
        "dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique",
    },
    {
      vacancyId: "clbjcn3m400083b6nndr3i4fj",
      resumeId: "clbjbs5os000b3b6nhhnco7bc",
      coverLetter:
        "fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a",
    },
    {
      vacancyId: "clbjcn3m400083b6nndr3i4fj",
      resumeId: "clbjbs5os000c3b6na7dmykla",
      coverLetter:
        "magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel",
    },
    {
      vacancyId: "clbjcn3m400093b6n214jwsv5",
      resumeId: "clbjbs5os000d3b6nl6izxqoe",
      coverLetter:
        "sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus.",
    },
    {
      vacancyId: "clbjcn3m4000a3b6npd5zks9y",
      resumeId: "clbjbs5os000e3b6n8asnzeyn",
      coverLetter:
        "orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec",
    },
    {
      vacancyId: "clbjcn3m4000b3b6n98mtc1f0",
      resumeId: "clbjbs5os000f3b6n0ocrnhnx",
      coverLetter:
        "lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut",
    },
    {
      vacancyId: "clbjcn3m4000c3b6nx3hn32mu",
      resumeId: "clbjbs5os000f3b6n0ocrnhnx",
      coverLetter:
        "Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum",
    },
    {
      vacancyId: "clbjcn3m4000c3b6nx3hn32mu",
      resumeId: "clbjbs5os000g3b6nceukyq4c",
      coverLetter:
        "sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet",
    },
    {
      vacancyId: "clbjcn3m4000c3b6nx3hn32mu",
      resumeId: "clbjbs5os000h3b6ndl2m2i31",
      coverLetter:
        "ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed",
    },
    {
      vacancyId: "clbjcn3m4000d3b6ngezvtw7e",
      resumeId: "clbjbs5os000i3b6nnsdu2zr1",
      coverLetter:
        "dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida",
    },
    {
      vacancyId: "clbjcn3m4000e3b6nyedhyazy",
      resumeId: "clbjbs5os000j3b6n6vnxuvre",
      coverLetter:
        "fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis",
    },
    {
      vacancyId: "clbjcn3m4000f3b6n1u8dl8vz",
      resumeId: "clbjbs5os000j3b6n6vnxuvre",
      coverLetter:
        "neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed",
    },
    {
      vacancyId: "clbjcn3m4000g3b6nmjppenz0",
      resumeId: "clbjbs5os000j3b6n6vnxuvre",
      coverLetter:
        "et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu",
    },
    {
      vacancyId: "clbjcn3m4000g3b6nmjppenz0",
      resumeId: "clbjbs5os000k3b6njrnt5jyy",
      coverLetter:
        "ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo",
    },
    {
      vacancyId: "clbjcn3m4000g3b6nmjppenz0",
      resumeId: "clbjbs5os000k3b6njrnt5jyy",
      coverLetter:
        "ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus,",
    },
  ];
