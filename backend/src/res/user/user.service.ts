import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { pbkdf2Sync } from 'crypto';
import { User } from 'src/entities/user.entity';
import { LoginUserDto } from '../../dto/login-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';

declare module 'express-session' {
  export interface SessionData {
    user?: number;
  }
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}
  async regist(createUserDto: CreateUserDto) {
    try {
      if (createUserDto.email !== '' && createUserDto.password !== '') {
        const salt = 'qwer';
        const cryptoId = pbkdf2Sync(
          createUserDto.email,
          salt,
          1000,
          64,
          'sha512',
        ).toString('hex');

        const cryptoPw = pbkdf2Sync(
          createUserDto.password,
          salt,
          1000,
          64,
          'sha512',
        ).toString('hex');

        await this.userRepo.save({
          email: cryptoId,
          password: cryptoPw,
          name: createUserDto.email.split('@')[0],
          birthdate: createUserDto.birthdate,
        });
        return { result: 'regist ok' };
      }
    } catch (err) {
      return { result: 'regist error' };
    }
  }

  async login(LoginUserDto: LoginUserDto, req: Request) {
    try {
      const salt = 'qwer';
      const cryptoId = pbkdf2Sync(
        LoginUserDto.email,
        salt,
        1000,
        64,
        'sha512',
      ).toString('hex');
      console.log(cryptoId);

      const cryptoPw = pbkdf2Sync(
        LoginUserDto.password,
        salt,
        1000,
        64,
        'sha512',
      ).toString('hex');
      const checkid = await User.findOne({ where: { email: cryptoId } });
      const checkpw = await User.findOne({ where: { password: cryptoPw } });
      if (!checkid) {
        console.log('id');
        return { result: 'not found email' };
      } else if (!checkpw) {
        console.log('pw');
        return { result: 'not found password' };
      } else {
        req.session.user = checkid.id;
        console.log('login ok');
        return { result: 'login ok' };
      }
    } catch (err) {
      console.error(err);
    }
  }

  async logout(req: Request) {
    req.session.destroy(() => {
      return { result: 'logout ok' };
    });
  }

  async upuserimg(id: number, img: string) {
    try {
      await this.userRepo.update({ id: id }, { userimg: img });
      return { result: 'userimg ok' };
    } catch (err) {
      console.error(err);
    }
  }
}
