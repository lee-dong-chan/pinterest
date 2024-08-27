import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
    // exposedHeaders:[] 사용할 헤더 추가
  });

  app.use(
    session({
      name: 'user',
      secret: 'user-session',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 100000000,
      },
    }),
  );

  await app.listen(8000);
}
bootstrap();
