import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['10.253.14.20:8088'],
  logLevel: logLevel.ERROR,
});

export const consumer = kafka.consumer({ groupId: 'test-group' });
