import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { RepositoryUser } from './user.repository';
// import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    // JwtModule.register({
    //   global: true,
    //   secret: process.env.SECRET_TOKEN,
    //   signOptions: { expiresIn: '60s' }, //* check
    // }),
  ],
  controllers: [UserController],
  providers: [UserService, RepositoryUser],
})
export class UserModule {}
