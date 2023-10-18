import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './infrastructure/common/filter/exceptions.filter';
import { LoggingInterceptor } from './infrastructure/common/interceptors/logger.interceptor';
import { ResponseInterceptor } from './infrastructure/common/interceptors/response.interceptor';
import { LoggerService } from './infrastructure/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Filter
  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));

  // pipes
  app.useGlobalPipes(new ValidationPipe());

  // interceptors
  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));
  app.useGlobalInterceptors(new ResponseInterceptor());

  // base routing
  app.setGlobalPrefix('api/learning-wallet');

  await app.listen(3000);
}
bootstrap();
