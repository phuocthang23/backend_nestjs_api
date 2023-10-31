import { Module } from '@nestjs/common';
import { ImageProductController } from './image-product.controller';
import { ImageProductService } from './image-product.service';
import { imageProduct } from './entities/image-product.enitty';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([imageProduct])],
  controllers: [ImageProductController],
  providers: [ImageProductService],
})
export class ImageProductModule {}
