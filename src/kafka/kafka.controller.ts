import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaConsumerService } from './kafka.consumer.service';
@Controller()
export class KafkaController {
  constructor(
    @Inject(KafkaConsumerService)
    private readonly kafkaConsumerService: KafkaConsumerService,
  ) {}
  @MessagePattern('support.ileads.user.save')
  async getDataKafka(@Payload() message) {
    return await this.kafkaConsumerService.retrieveUserData(message);
  }
}
