import { Field, InputType } from "type-graphql";
import { UserCreateInput } from "../../../prisma/generated";

@InputType()
export class CreateAndLoginUserInputData
  implements Pick<UserCreateInput, "role">
{
  @Field()
  role: "Applicant" | "Employer";
}

@InputType()
export class CreateAndLoginUserInput {
  @Field()
  authToken: string;

  @Field((_type) => CreateAndLoginUserInputData)
  data: CreateAndLoginUserInputData;
}
