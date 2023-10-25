import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka-consumer.service';
import { KafkaConsumerController } from './kafka-consumer.controller';
import { User } from 'src/user/user.entity';

@Module({
  imports: [User],
  controllers: [KafkaConsumerController],
  providers: [KafkaConsumerService],
  exports: [KafkaConsumerService],
})
export class KafkaModule {}
