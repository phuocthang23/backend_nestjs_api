import { Module } from '@nestjs/common';
import { ImageProductController } from './image-product.controller';
import { ImageProductService } from './image-product.service';
import { imageProduct } from './entities/image-product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageProductRepository } from './image-product.responsitory';
import { CloudinaryProvider } from 'src/shared/cloudinary/cloudinary.provider';

@Module({
  imports: [TypeOrmModule.forFeature([imageProduct])],
  controllers: [ImageProductController],
  providers: [ImageProductService, ImageProductRepository, CloudinaryProvider],
})
export class ImageProductModule {}
