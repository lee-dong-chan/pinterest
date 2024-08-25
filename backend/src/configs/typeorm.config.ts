import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function TypeormConfig(configService: ConfigService) {
  const env = configService.get('NODE_ENV');
  if (!['dev', 'prod'].includes(env)) {
    throw Error('dev 또는 prod 중 하나의환걍에 속해야 합니다.');
  }

  const synchronize =
    configService.get<string>(`SYNCHRONIZE`) === 'true' ? true : false;
  const logging =
    configService.get<string>(`DB_LOGGING`) === 'true' ? true : false;

  const option: TypeOrmModuleOptions = {
    type: 'mysql',
    host: configService.get(`DB_HOST`),
    port: configService.get<number>(`DB_PORT`),
    username: configService.get(`DB_USERNAME`),
    password: configService.get(`DB_PASSWORD`),
    database: configService.get(`DB_DATABASE`),
    autoLoadEntities: true, //프로젝트 내의 entity의 자동스캔 여부
    synchronize: env === 'production' ? false : synchronize, //DB 동기화
    logging: logging, //로그 정보 출력 여부
    retryAttempts: env === 'production' ? 10 : 1, //DB 연결시도 횟수
  };

  return option;
}
