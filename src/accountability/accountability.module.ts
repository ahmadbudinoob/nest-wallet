import { Module } from '@nestjs/common';
import { AccountabilityController } from './accountability.controller';
import { AccountabilityService } from './accountability.service';
import { AccountabilityEntity } from './entity/accountability.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AccountabilityEntity])],
  controllers: [AccountabilityController],
  providers: [AccountabilityService],
  exports: [AccountabilityService],
})
export class AccountabilityModule {}
