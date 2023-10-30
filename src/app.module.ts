import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleModule } from './module/role/role.module';
import { UserModule } from './module/user/user.module';
import config from 'ormconfig';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule, RoleModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
