import { IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class LoginInput {
  @Field()
  @IsString()
  login: string;

  @Field()
  @IsString()
  password: string;
}
