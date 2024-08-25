import { IsArray, IsNumber, IsString } from 'class-validator';
//dto 인스턴스 객체
export class CreatePostDto {
  @IsString()
  readonly title: string;
  @IsString()
  readonly content: string;
  @IsString()
  readonly postimg: string;
  @IsNumber()
  readonly categoryid: number;
  @IsNumber()
  readonly userid: number;
  @IsArray()
  readonly tags: [{ id?: number; name: string }];
}
