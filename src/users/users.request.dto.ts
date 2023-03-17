import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UsersRequestDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;
}
