import { UserModel } from '../model/users.model';

export interface UserRepository {
  findById(id: string): Promise<UserModel | null>;
  findByUsername(username: string): Promise<UserModel | null>;
  findByEmail(email: string): Promise<UserModel | null>;
  create(user: UserModel): Promise<UserModel>;
  update(user: UserModel): Promise<UserModel>;
  delete(id: string): Promise<void>;
}
