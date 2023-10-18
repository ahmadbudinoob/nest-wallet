import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from '../../domain/model/users.model';
import { UserRepository } from '../../domain/repository/userRepository.interface';
import { User } from '../entities/user.entity';

@Injectable()
export class DatabaseUserRepository implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userEntityRepository: Repository<User>,
  ) {}

  async findById(id: string): Promise<UserModel | null> {
    const userEntity = await this.userEntityRepository.findOne({
      where: { id: id },
    });
    if (!userEntity) {
      return null;
    }
    return this.mapEntityToModel(userEntity);
  }

  async findByUsername(username: string): Promise<UserModel | null> {
    const userEntity = await this.userEntityRepository.findOne({
      where: { username },
    });
    if (!userEntity) {
      return null;
    }
    return this.mapEntityToModel(userEntity);
  }

  async findByEmail(email: string): Promise<UserModel | null> {
    const userEntity = await this.userEntityRepository.findOne({
      where: { email },
    });
    if (!userEntity) {
      return null;
    }
    return this.mapEntityToModel(userEntity);
  }

  async create(user: UserModel): Promise<UserModel> {
    const userEntity = this.userEntityRepository.create(user);
    await this.userEntityRepository.save(userEntity);
    return this.mapEntityToModel(userEntity);
  }

  async update(user: UserModel): Promise<UserModel> {
    const userEntity = await this.userEntityRepository.findOne({
      where: { id: user.id },
    });
    if (!userEntity) {
      throw new Error(`User with ID ${user.id} not found`);
    }
    Object.assign(userEntity, user);
    await this.userEntityRepository.save(userEntity);
    return this.mapEntityToModel(userEntity);
  }

  async delete(id: string): Promise<void> {
    const userEntity = await this.userEntityRepository.findOne({
      where: { id: id },
    });
    if (!userEntity) {
      throw new Error(`User with ID ${id} not found`);
    }
    await this.userEntityRepository.remove(userEntity);
  }

  private mapEntityToModel(entity: User): UserModel {
    return {
      id: entity.id,
      unit_id: entity.unit_id,
      access_id: entity.access_id,
      head_id: entity.head_id,
      username: entity.username,
      auth: entity.auth,
      name: entity.name,
      grade: entity.grade,
      gender: entity.gender,
      position: entity.position,
      phone: entity.phone,
      email: entity.email,
      email_verified_at: entity.email_verified_at,
      password: entity.password,
      remember_token: entity.remember_token,
      avatar: entity.avatar,
      kode_grade: entity.kode_grade,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      status: entity.status,
    };
  }
}
