import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNovelDto {
  @IsString()
  @IsNotEmpty()
  title: string;
}
