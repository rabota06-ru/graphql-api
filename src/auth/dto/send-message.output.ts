import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SendMessageOutput {
  @Field()
  authToken: string;
}
