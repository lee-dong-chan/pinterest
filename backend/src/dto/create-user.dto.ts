import { IsDate, IsString } from 'class-validator';
//dto 인스턴스 객체
export class CreateUserDto {
  @IsString()
  readonly email: string;
  @IsString()
  readonly password: string;
  @IsString()
  readonly userimg: string;
  @IsDate()
  readonly birthdate: Date;
}
