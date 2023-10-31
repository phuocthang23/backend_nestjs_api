import { Module } from '@nestjs/common';
import { SizeProductController } from './size-product.controller';
import { SizeProductService } from './size-product.service';
import { sizeProduct } from './entities/sizeProduct.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([sizeProduct])],

  controllers: [SizeProductController],
  providers: [SizeProductService],
})
export class SizeProductModule {}
