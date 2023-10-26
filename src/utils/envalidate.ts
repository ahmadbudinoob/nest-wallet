import { cleanEnv, str, port } from 'envalid';

export const envalidate = () => {
  return cleanEnv(process.env, {
    NODE_ENV: str({
      choices: ['development', 'test', 'production', 'staging'],
    }),
    PORT_LEARNING_WALLET: port(),
    POSTGRE_HOST: str(),
    POSTGRE_PORT: port(),
    POSTGRE_USERNAME: str(),
    POSTGRE_PASSWORD: str(),
    POSTGRE_DB_NAME: str(),
    FRONT_END_URL: str(),
  });
};
