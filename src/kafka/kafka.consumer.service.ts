import { Injectable, Logger } from '@nestjs/common';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  setResponseSaveFailed,
  setResponseSaveSuccess,
} from 'src/shared/response/response-factory';
import constants from 'src/utils/constants';

@Injectable()
export class KafkaConsumerService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async retrieveUserData(message: any) {
    Logger.log(message);
    try {
      const user = await this.userRepository
        .createQueryBuilder('mdl_users')
        .where('username = :username', { username: message.username })
        .getOne();
      Logger.log(user);
      if (!user) {
        const newUser = this.userRepository.create({
          username: message.username,
          name: message.name,
          grade: message.grade,
          position: message.kodeJabatan,
          phone: message.phone,
          email: message.email,
          unit_id: message.kodeUnitOrganisasi,
          avatar: message.avatar,
          access_id: 2,
          created_at: new Date(),
        });
        await this.userRepository.save(newUser);
        Logger.log('User created');
      } else {
        user.name = message.name;
        user.grade = message.grade;
        user.position = message.kodeJabatan;
        user.phone = message.phone;
        user.email = message.email;
        user.unit_id = message.kodeUnitOrganisasi;
        user.avatar = message.avatar;
        user.updated_at = new Date();
        await this.userRepository.save(user);
        Logger.log('User updated');
      }
      return setResponseSaveSuccess(constants.RESPONSE.SIMPAN_DATA_BERHASIL);
    } catch (error) {
      Logger.error(error);
      return setResponseSaveFailed();
    }
  }
}
