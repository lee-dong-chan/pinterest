import { IsArray, IsNumber, IsString } from 'class-validator';
//dto 인스턴스 객체
export class CreateCommentDto {
  @IsString()
  readonly content: string;
  @IsNumber()
  readonly userId: number;
  @IsNumber()
  readonly postId: number;
}
