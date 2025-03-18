import { Module } from '@nestjs/common';
import { ListProductController } from './list-product.controller';

@Module({
  controllers: [ListProductController]
})
export class ProductsModule {}
