import { Module } from '@nestjs/common';
import { WishlistController } from './wishlist.controller';
import { WishlistService } from './wishlist.service';
import { wishList } from './enities/wishlist.enity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([wishList])],
  controllers: [WishlistController],
  providers: [WishlistService],
})
export class WishlistModule {}
