import { DynamicModule, Module } from '@nestjs/common';

import { ExceptionsModule } from '../exceptions/exceptions.module';
import { LoggerModule } from '../logger/logger.module';
import { RepositoriesModule } from '../repositories/repositories.module';
import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';

@Module({
  imports: [
    LoggerModule,
    EnvironmentConfigModule,
    RepositoriesModule,
    ExceptionsModule,
  ],
})
export class UsecasesProxyModule {
  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [],
      exports: [],
    };
  }
}
