import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { mysqlConfig } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountabilityModule } from './accountability/accountability.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { KafkaController } from './kafka/kafka.controller';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlConfig),
    AccountabilityModule,
    KafkaModule,
  ],
  controllers: [],
  providers: [KafkaController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
