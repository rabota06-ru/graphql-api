import { Matches } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class SendMessageInput {
  @Field()
  @Matches(/7\d\d\d\d\d\d\d\d\d\d/)
  phone: string;
}
