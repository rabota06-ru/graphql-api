import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class AccessTokenOutput {
  @Field()
  accessToken: string;
}
