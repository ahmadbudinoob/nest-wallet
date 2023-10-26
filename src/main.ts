import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const PORT = 8080;
  if (process.env.NODE_ENV === 'development') {
    const config = new DocumentBuilder()
      .setTitle('ILEADS-AUTH')
      .setDescription('SERVICE FORM ILEADS AUTH')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
  }
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['10.253.14.20:9092'],
      },
      consumer: {
        groupId: 'support.ileads.user.save',
      },
    },
  });
  await app.startAllMicroservices();
  await app.listen(PORT);
}
bootstrap();
