import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { hashPassword } from 'src/utils/bycrypt';
import { CreateUserParams } from 'src/utils/types';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async createUsers(
    data: CreateUserParams,
  ): Promise<{ message: string } | User> {
    const checkEmail = await this.authRepository.getUserByEmail(data);
    if (checkEmail) {
      return {
        message: 'Email already exists',
      };
    } else {
      const hashedPassword = await hashPassword(data.password);

      const newUser = {
        ...data,
        password: hashedPassword,
      };
      console.log(newUser);
      return await this.authRepository.register(newUser);
    }
  }

  async findUserEmail(data: CreateUserParams): Promise<User> {
    return await this.authRepository.getUserByEmail(data);
  }
}
