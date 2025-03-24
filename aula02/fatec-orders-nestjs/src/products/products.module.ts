import { Module } from '@nestjs/common';

import { ProductController } from './product.controller';
import { ListProductService } from './services/list-product.service';
import { GetProductByIdService } from './services/get-product-byid.service';
import { Product } from './repositories/product';

@Module({
  controllers: [ProductController],
  providers: [ListProductService, GetProductByIdService, Product],
})
export class ProductsModule {}

