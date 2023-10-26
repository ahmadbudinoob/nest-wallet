import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserCabang } from './entity/user-cabang.entity';
import { UserAreaEntity } from './entity/user-area.entity';
import { UserUnit } from './entity/user-unit.entity';
import { UserKanwilEntity } from './entity/user-kanwil.entity';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UserCabang,
      UserAreaEntity,
      UserUnit,
      UserKanwilEntity,
    ]),
  ],
  controllers: [],
  providers: [UserService],
  exports: [],
})
export class UserModule {}
