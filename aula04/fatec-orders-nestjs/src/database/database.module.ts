import { Module } from '@nestjs/common';
import { ProductRepository } from 'src/database/repositories/product.repository';

@Module({
    providers: [ProductRepository],
    exports: [ProductRepository]
})
export class DatabaseModule {}
