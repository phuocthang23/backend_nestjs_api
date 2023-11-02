import { Categories } from 'src/module/categories/entities/category.entity';
import { imageProduct } from 'src/module/image-product/entities/image-product.entity';
import { ProductSize } from 'src/module/size-product/entities/product-size.entity';
import { Size } from 'src/module/size/entities/size.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
  // OneToMany,
  // OneToMany,
} from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  nameProduct: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'int', nullable: false })
  price: number;

  @Column({ type: 'int', nullable: false })
  categoryId: number;

  @Column({ type: 'int', nullable: false })
  stock: number;

  @Column({ type: 'int', nullable: false, default: 0 })
  status: number;

  @CreateDateColumn({ type: 'timestamp', select: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', select: false })
  updatedAt: Date;

  @ManyToOne(() => Categories, (Categories) => Categories.products)
  category: Categories;

  @ManyToMany(() => Size)
  @JoinTable({ name: 'product-size' })
  sizes: Size[];

  @OneToMany(() => ProductSize, (sizeProduct) => sizeProduct.product)
  sizeProducts: ProductSize[];

  @OneToMany(() => imageProduct, (imageProduct) => imageProduct.product)
  imageProducts: imageProduct[];
}
