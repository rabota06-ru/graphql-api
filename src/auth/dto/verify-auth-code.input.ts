import { Matches } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class VerifyAuthCodeInput {
  @Field()
  authToken: string;

  @Field()
  code: string;
}
