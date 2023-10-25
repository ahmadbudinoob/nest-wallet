import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const mysqlConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  logging: true,
  migrationsRun: false,
  synchronize: false,
};

export { mysqlConfig };
