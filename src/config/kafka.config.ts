export const kafkaConfig = {
  brokers: ['10.253.14.20:9092'],
  groupId: 'user-wallet-consumer',
  maxBytesPerPartition: 100000,
  sessionTimeout: 6000,
  heartbeatInterval: 2000,
  fromBeginning: true,
};
