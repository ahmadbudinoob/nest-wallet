import { Kafka, logLevel } from 'kafkajs';

export class KafkaService {
  private kafka: Kafka;
  private consumer: any;

  constructor() {
    this.kafka = new Kafka({
      clientId: 'my-app',
      brokers: ['10.253.14.20:8088'],
      logLevel: logLevel.ERROR,
    });

    this.consumer = this.kafka.consumer({
      groupId: 'support.ileads.user.save',
    });
  }

  async connect() {
    await this.consumer.connect();
  }

  async subscribe(topic: string) {
    await this.consumer.subscribe({ topic, fromBeginning: true });
  }

  async consume() {
    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          topic: topic.value.toString(),
          partition: partition.toString(),
          value: message.value.toString(),
        });
      },
    });
  }
}
