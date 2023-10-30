/* eslint-disable @typescript-eslint/no-unused-vars */
import { PipeTransform, Injectable } from '@nestjs/common';
import { User } from 'src/module/user/entities/user.entity';

@Injectable()
export class HidePasswordPipe implements PipeTransform {
  transform(user: User) {
    const { password, ...result } = user;
    return result;
  }
}
