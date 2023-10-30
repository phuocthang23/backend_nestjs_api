import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserParams } from 'src/utils/types';

export class AuthRepository {
  constructor(@InjectRepository(User) private rep: Repository<User>) {}

  async getUserByEmail(data: CreateUserParams): Promise<User> {
    const checkEmail = await this.rep.findOne({
      where: {
        email: data.email,
      },
    });
    return checkEmail;
  }

  async register(data: CreateUserParams): Promise<User | { message: string }> {
    return await this.rep.save(data);
  }
}
