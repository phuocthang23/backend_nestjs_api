import { Module } from '@nestjs/common';
import { ImageProductController } from './image-product.controller';
import { ImageProductService } from './image-product.service';

@Module({
  controllers: [ImageProductController],
  providers: [ImageProductService]
})
export class ImageProductModule {}
