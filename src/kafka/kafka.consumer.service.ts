import { Injectable, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService {
  constructor() {}

  @MessagePattern('support.ileads.user.save')
  async retrieveUserData(@Payload() message: { num: number }) {
    Logger.log('retrieveUserData function called');
    Logger.log(message);
    return 0;
  }
}
