import { IsDate, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly email: string;
  @IsString()
  readonly password: string;
  @IsDate()
  readonly birthdate: Date;
  @IsString()
  readonly user_img: string;
}
