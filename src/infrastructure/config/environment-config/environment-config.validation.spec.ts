import { validate } from './environment-config.validation';

describe('validate', () => {
  it('should validate the environment configuration', () => {
    const config = {
      NODE_ENV: 'development',
      DATABASE_HOST: 'localhost',
      DATABASE_PORT: 5432,
      DATABASE_USER: 'user',
      DATABASE_PASSWORD: 'password',
      DATABASE_NAME: 'database',
      DATABASE_SCHEMA: 'public',
    };

    const validatedConfig = validate(config);

    expect(validatedConfig).toEqual(config);
  });

  it('should throw an error if the environment configuration is invalid', () => {
    const config = {
      NODE_ENV: 'invalid-environment',
      DATABASE_HOST: 'localhost',
      DATABASE_PORT: 'invalid-port',
      DATABASE_USER: 'user',
      DATABASE_PASSWORD: 'password',
      DATABASE_NAME: 'database',
      DATABASE_SCHEMA: 'public',
    };

    expect(() => validate(config)).toThrowError();
  });
});
