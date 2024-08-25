import {
  Controller,
  Post,
  Body,
  Req,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { LoginUserDto } from '../../dto/login-user.dto';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/regist')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.regist(createUserDto);
  }

  @Post('/login')
  async login(@Body() LoginUserDto: LoginUserDto, @Req() req: Request) {
    return this.userService.login(LoginUserDto, req);
  }

  @Post('/logout')
  async logout(@Req() req: Request) {
    return this.userService.logout(req);
  }
  @Patch('/userimg/:id')
  upimg(@Param('id') id: number, @Query('img') img: string) {
    return this.userService.upuserimg(id, img);
  }
}
