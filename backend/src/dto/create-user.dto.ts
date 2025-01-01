import { IsDate, IsNotEmpty, IsString } from 'class-validator';
//dto 인스턴스 객체
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
  @IsNotEmpty()
  @IsString()
  readonly userimg: string;
  @IsNotEmpty()
  @IsDate()
  readonly birthdate: Date;
}
