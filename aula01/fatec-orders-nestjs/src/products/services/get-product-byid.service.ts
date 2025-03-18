import { Injectable } from '@nestjs/common';

@Injectable()
export class GetProductByIdService {
    execute(id: number): any{
        return{
            {
                id,
                name: "blacha",
                value: 2.59,
                brand: "trakinas",
                weight: 1000 
            }
        }
    }
}
