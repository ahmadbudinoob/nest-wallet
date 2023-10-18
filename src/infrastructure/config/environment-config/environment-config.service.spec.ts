import { ConfigService } from '@nestjs/config';
import { EnvironmentConfigService } from './environment-config.service';

describe('EnvironmentConfigService', () => {
  let environmentConfigService: EnvironmentConfigService;
  let configService: ConfigService;

  beforeEach(() => {
    configService = new ConfigService();
    environmentConfigService = new EnvironmentConfigService(configService);
  });

  describe('getDatabaseHost', () => {
    it('should return the database host from the configuration', () => {
      const host = 'localhost';
      jest.spyOn(configService, 'get').mockReturnValueOnce(host);

      const result = environmentConfigService.getDatabaseHost();

      expect(result).toEqual(host);
      expect(configService.get).toHaveBeenCalledWith('DATABASE_HOST');
    });
  });

  describe('getDatabasePort', () => {
    it('should return the database port from the configuration', () => {
      const port = 5432;
      jest.spyOn(configService, 'get').mockReturnValueOnce(port);

      const result = environmentConfigService.getDatabasePort();

      expect(result).toEqual(port);
      expect(configService.get).toHaveBeenCalledWith('DATABASE_PORT');
    });
  });

  describe('getDatabaseUser', () => {
    it('should return the database user from the configuration', () => {
      const user = 'user';
      jest.spyOn(configService, 'get').mockReturnValueOnce(user);

      const result = environmentConfigService.getDatabaseUser();

      expect(result).toEqual(user);
      expect(configService.get).toHaveBeenCalledWith('DATABASE_USER');
    });
  });

  describe('getDatabasePassword', () => {
    it('should return the database password from the configuration', () => {
      const password = 'password';
      jest.spyOn(configService, 'get').mockReturnValueOnce(password);

      const result = environmentConfigService.getDatabasePassword();

      expect(result).toEqual(password);
      expect(configService.get).toHaveBeenCalledWith('DATABASE_PASSWORD');
    });
  });

  describe('getDatabaseName', () => {
    it('should return the database name from the configuration', () => {
      const name = 'database';
      jest.spyOn(configService, 'get').mockReturnValueOnce(name);

      const result = environmentConfigService.getDatabaseName();

      expect(result).toEqual(name);
      expect(configService.get).toHaveBeenCalledWith('DATABASE_NAME');
    });
  });
});
