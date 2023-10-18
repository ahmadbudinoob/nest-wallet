import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { Submission } from '../entities/submission.entity';
import { User } from '../entities/user.entity';
import { DatabaseUserRepository } from './users.repository';
@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([Submission, User])],
  providers: [DatabaseUserRepository, DatabaseUserRepository],
  exports: [DatabaseUserRepository, DatabaseUserRepository],
})
export class RepositoriesModule {}
