import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

//controller
import { AppController } from './app.controller';

//typeorm
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfig } from './configs/typeorm.config';

//entity
import { Post } from './entities/post.entity';
import { Category } from './entities/category.entity';
import { Comment } from './entities/comment.entity';
import { Tags } from './entities/tags.entity';
import { Selecttags } from './entities/selecttag.entity';
import { User } from './entities/user.entity';

//module
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './res/user/user.module';
import { PostModule } from './res/post/post.module';
import { CommentModule } from './res/comment/comment.module';
import { CategoryModule } from './res/category/category.module';

//sevice
import { AppService } from './app.service';
import { CategoryService } from './res/category/category.service';
import { LogcheckMiddleware } from './middleware/logcheck/logcheck.middleware';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, Category, Comment, Tags, Selecttags, User]),
    ConfigModule.forRoot({
      //프로젝트 루트 리렉토리에서 해당파일 이름의 .env 파일 호출(dev,prod)
      isGlobal: true,
      envFilePath: `/var/www/pinterestback/.env.dev`,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: TypeormConfig,
    }),
    //TypeOrmModule안에 imports와 inject를 사용하여 ConfigModule,ConfigService을 추가
    //그리고 useFactory로 설정을 반환 .useFactory는 동적으로 모듈을 만드는데 사용됨

    UserModule,
    PostModule,
    CommentModule,
    CategoryModule,
    MulterModule.register({}),
  ],
  controllers: [AppController],
  providers: [AppService, CategoryService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogcheckMiddleware).forRoutes('*');
    consumer.apply(LogcheckMiddleware).forRoutes('user'); //user 경로에만 등록
    // .forRoutes({ path: 'users', method: RequestMethod.GET }); //users 경로에서 GET 요청에만 등록
  }
  constructor(private categoryService: CategoryService) {
    this.categoryService.defaultcategory();
  }
}
