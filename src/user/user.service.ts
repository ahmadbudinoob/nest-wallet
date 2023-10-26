import { Injectable, Logger } from '@nestjs/common';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async updateUser(message): Promise<any> {
    const user = await this.userRepository.findOneBy({
      username: message.username,
    });
    if (user) {
      user.grade = message.grade;
      user.position = message.position;
      user.email = message.email;
      user.phone = message.phone;
      user.kode_grade = message.kode_grade;
      user.unit_id = message.unitKerjaId;
      user.avatar = message.avatar;
      user.status = message.active;
      await this.userRepository.save(user);
      Logger.log('User updated');
    } else {
      const newUser = new User();
      newUser.grade = message.grade;
      newUser.position = message.position;
      newUser.email = message.email;
      newUser.phone = message.phone;
      newUser.kode_grade = message.kode_grade;
      newUser.unit_id = message.unitKerjaId;
      newUser.avatar = message.avatar;
      newUser.status = message.active;
      await this.userRepository.save(newUser);
      Logger.log('User created');
    }
    return 0;
  }
}
