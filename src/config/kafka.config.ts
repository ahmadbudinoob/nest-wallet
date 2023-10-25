import 'dotenv/config';
import { ClientsModuleOptions, Transport } from '@nestjs/microservices';

const kafkaConfig: ClientsModuleOptions = [
  {
    name: 'ILEADS_USER_SERVICE',
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'ileads-user',
        brokers: [process.env.KAFKA_URL],
      },
      consumer: {
        groupId: 'ileads-user-consumer',
      },
    },
  },
];

export { kafkaConfig };
