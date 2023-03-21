import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSentenceDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  novelId: string;
}
