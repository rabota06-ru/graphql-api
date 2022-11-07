import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class CheckAuthenticatedOutput {
  @Field()
  authenticated: boolean;

  @Field({ nullable: true })
  accessToken?: string;
}
