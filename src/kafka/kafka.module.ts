import { Module } from '@nestjs/common';
import { KafkaController } from './kafka.controller';
import { KafkaConsumerService } from './kafka.consumer.service';
import { User } from 'src/user/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [KafkaController],
  providers: [KafkaConsumerService],
  exports: [],
})
export class KafkaModule {}
