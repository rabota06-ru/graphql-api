import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class LoginOutput {
  @Field()
  accessToken: string;
}
