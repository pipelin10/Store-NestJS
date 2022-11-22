import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryID/products/:productID')
  getCategory(
    @Param('categoryID') categoryID: string,
    @Param('productID') productID: string,
  ) {
    return `category ${categoryID}, product ${productID}`;
  }
}
