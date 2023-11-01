import { Injectable } from '@nestjs/common';
import { imageProduct } from './entities/image-product.entity';
import { ImageProductRepository } from './image-product.responsitory';

@Injectable()
export class ImageProductService {
  constructor(private imageProductRepository: ImageProductRepository) {}
  async createImagesForProduct(
    productId: number,
    imageUrls: string[],
  ): Promise<imageProduct[]> {
    // console.log(imageUrls, 'imageUrls');
    const productImages = await Promise.all(
      imageUrls.map((imageUrl) =>
        this.imageProductRepository.create({
          src: imageUrl,
          productID: productId,
        }),
      ),
    );
    return productImages;
  }
}
