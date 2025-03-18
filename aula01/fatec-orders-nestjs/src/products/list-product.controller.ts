import { Controller, Get, Param } from '@nestjs/common';
import { ListProductService } from './services/list-product.service';
import { GetProductByIdService } from './services/get-product-byid.service';

@Controller('product')
export class ListProductController {
    constructor(private listProductService: ListProductService,
        private getProductByIdService: GetProductByIdService
    ){}
    @Get(':id')
    list(): any[]{
        getById(@Param('id')id: number)
        const product = this.listProductService.execute(id)
        return product
    }
}
