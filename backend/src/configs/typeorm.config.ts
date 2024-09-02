import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function TypeormConfig(configService: ConfigService) {
  const option: TypeOrmModuleOptions = {
    type: 'mysql',
    host: configService.get(`DB_HOST`),
    port: configService.get<number>(`DB_PORT`),
    username: configService.get(`DB_USERNAME`),
    password: configService.get(`DB_PASSWORD`),
    database: configService.get(`DB_DATABASE`),
    autoLoadEntities: true, //프로젝트 내의 entity의 자동스캔 여부
    synchronize: true, //DB 동기화
    logging: true, //로그 정보 출력 여부
    retryAttempts: 1, //DB 연결시도 횟수
  };

  return option;
}
