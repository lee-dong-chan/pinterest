import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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

  await app.listen(3000);
}
bootstrap();
