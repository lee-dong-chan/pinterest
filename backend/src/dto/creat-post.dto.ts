import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
//dto 인스턴스 객체
export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;
  @IsNotEmpty()
  @IsString()
  readonly content: string;
  @IsNotEmpty()
  @IsString()
  readonly postimg: string;
  @IsNotEmpty()
  @IsNumber()
  readonly categoryid: number;
  @IsNotEmpty()
  @IsNumber()
  readonly userid: number;
  @IsArray()
  readonly tags: [{ id?: number; name: string }];
}
