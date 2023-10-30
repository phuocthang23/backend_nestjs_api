import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { config as configDotenv } from 'dotenv';
import { JWT } from 'src/utils/jwt';
configDotenv();
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
      // signOptions: {
      //   expiresIn: '1d',
      // },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, JWT],
})
export class AuthModule {}
