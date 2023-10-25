import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { mysqlConfig } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountabilityModule } from './accountability/accountability.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [TypeOrmModule.forRoot(mysqlConfig), AccountabilityModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}