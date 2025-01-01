import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
//dto 인스턴스 객체
export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  readonly content: string;
  @IsNotEmpty()
  @IsNumber()
  readonly userId: number;
  @IsNotEmpty()
  @IsNumber()
  readonly postId: number;
}
