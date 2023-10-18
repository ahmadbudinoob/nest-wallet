import { KafkaService } from './kafka.service';

jest.mock('kafkajs');

describe('KafkaService', () => {
  let kafkaService: KafkaService;

  beforeEach(() => {
    jest.clearAllMocks();
    kafkaService = new KafkaService();
  });

  describe('connect', () => {
    it('should connect to the Kafka broker', async () => {
      await kafkaService.connect();

      expect(kafkaService['consumer'].connect).toHaveBeenCalledTimes(1);
    });
  });

  describe('subscribe', () => {
    it('should subscribe to the specified Kafka topic', async () => {
      const topic = 'test-topic';

      await kafkaService.subscribe(topic);

      expect(kafkaService['consumer'].subscribe).toHaveBeenCalledTimes(1);
      expect(kafkaService['consumer'].subscribe).toHaveBeenCalledWith({
        topic,
        fromBeginning: true,
      });
    });
  });

  describe('consume', () => {
    it('should consume messages from the subscribed Kafka topic', async () => {
      const message = { value: 'test-message' };

      await kafkaService.consume();

      const eachMessageCallback =
        kafkaService['consumer'].run.mock.calls[0][0].eachMessage;
      await eachMessageCallback({ topic: 'test-topic', partition: 0, message });

      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith({
        topic: 'test-topic',
        partition: '0',
        value: 'test-message',
      });
    });
  });
});
