import { Controller, Post, Body } from '@nestjs/common';
import { KafkaConsumerService } from './kafka-consumer.service';

@Controller('kafka-consumer')
export class KafkaConsumerController {
  constructor(private readonly kafkaConsumerService: KafkaConsumerService) {}

  @Post('subscribe')
  async subscribeToKafkaTopic(@Body('topic') topic: string) {
    await this.kafkaConsumerService.subscribeToTopic(topic);
    return `Subscribed to Kafka topic: ${topic}`;
  }
}
