import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola mundo';
  }

  @Get('nuevo')
  newEndpoint(): string {
    return 'Yo soy nuevo';
  }

  @Get('/ruta/')
  hello(): string {
    return `con /sas/`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand = 'MyBrand',
  ) {
    return `products ${limit} ${offset} ${brand}`;
  }

  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return `product ${id}`;
  }

  @Get('categories/:categoryID/products/:productID')
  getCategory(
    @Param('categoryID') categoryID: string,
    @Param('productID') productID: string,
  ) {
    return `category ${categoryID}, product ${productID}`;
  }
}
