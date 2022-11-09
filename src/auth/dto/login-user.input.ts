import { Field, InputType } from "type-graphql";

@InputType()
export class LoginUserInput {
  @Field()
  authToken: string;
}
