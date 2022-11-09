import { IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class LoginAdminInput {
  @Field()
  @IsString()
  login: string;

  @Field()
  @IsString()
  password: string;
}
