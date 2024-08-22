import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfig } from './configs/typeorm.config';
import { Post } from './entities/post.entity';
import { Category } from './entities/category.entity';
import { Comment } from './entities/comment.entity';
import { Tags } from './entities/tags.entity';
import { Selecttags } from './entities/selecttag.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, Category, Comment, Tags, Selecttags]),
    ConfigModule.forRoot({
      //프로젝트 루트 리렉토리에서 해당파일 이름의 .env 파일 호출(dev,prod)
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: TypeormConfig,
    }),
    //TypeOrmModule안에 imports와 inject를 사용하여 ConfigModule,ConfigService을 추가
    //그리고 useFactory로 설정을 반환 .useFactory는 동적으로 모듈을 만드는데 사용됨
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
