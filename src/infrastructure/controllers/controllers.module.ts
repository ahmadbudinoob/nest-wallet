import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { SubmissionController } from './submission/submission.controller';

@Module({
  imports: [UsecasesProxyModule.register()],
  controllers: [SubmissionController],
})
export class ControllersModule {}
