import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class VerifyAuthCodeOutput {
  @Field()
  authenticated: boolean;

  @Field({ nullable: true })
  authToken?: string;
}
