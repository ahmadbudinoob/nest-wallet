import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { mysqlConfig } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountabilityModule } from './accountability/accountability.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { KafkaModule } from './kafka/kafka.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlConfig),
    AccountabilityModule,
    KafkaModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
