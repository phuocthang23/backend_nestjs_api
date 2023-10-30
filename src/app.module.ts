import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleModule } from './module/role/role.module';
import { UserModule } from './module/user/user.module';
import config from 'ormconfig';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,
    RoleModule,
    AuthModule,
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_TOKEN,
      signOptions: { expiresIn: '60s' }, //* check
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
