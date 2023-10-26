import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class KafkaController {
  @MessagePattern('support.ileads.user.save')
  async getDataKafka(@Payload() message) {
    Logger.log('retrieveUserData function called');
    Logger.log(message);
    return 0;
  }
}
