import { Injectable, Logger } from '@nestjs/common';
import { Kafka, logLevel } from 'kafkajs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';

@Injectable()
export class KafkaConsumerService {
  private kafka: Kafka;
  private consumer;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    this.kafka = new Kafka({
      clientId: 'my-kafka-client',
      brokers: ['kafka-broker-1', 'kafka-broker-2'],
      logLevel: logLevel.ERROR, // Atur level log sesuai kebutuhan.
    });

    this.consumer = this.kafka.consumer({ groupId: 'my-group' });
  }

  async subscribeToTopic(topic: string) {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic, fromBeginning: true });
    await this.consumer.run({
      eachMessage: async ({ message }) => {
        // Mendapatkan data pesan dari Kafka.
        Logger.log(`Menerima pesan dari Kafka: ${message.value}`);
        try {
          Logger.log(`Menerima pesan dari Kafka: ${message.value}`);
        } catch (error) {
          console.error(`Gagal menyimpan pesan ke database: ${error}`);
        }
      },
    });
  }
}
