import { Injectable, Get } from '@nestjs/common';

@Injectable()
export class ListProductService {
    execute(): any[]{
        return[
            {
                name: "bolacha",
                value: 2.59,
                brand: "trakinas",
                weight: 1000 
            }
        ]
    }
    @Get(":id")
    getById(): any{
        const product = this.getProductByIdService.execute();
    }
}
