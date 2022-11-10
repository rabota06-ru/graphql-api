import { Field, InputType } from "type-graphql";
import { UserCreateInput } from "../../../prisma/generated";

@InputType()
export class CreateUserInputData implements Pick<UserCreateInput, "role"> {
  @Field()
  role: "Applicant" | "Employer";
}

@InputType()
export class CreateUserInput {
  @Field()
  authToken: string;

  @Field((_type) => CreateUserInputData)
  data: CreateUserInputData;
}
