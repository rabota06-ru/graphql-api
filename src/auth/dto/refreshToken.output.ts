import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class RefreshTokenOutput {
  @Field()
  accessToken: string;
}
