import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand = 'MyBrand',
  ) {
    return {
      message: `products ${limit} ${offset} ${brand}`,
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Res() response: Response, @Param('id') id: string) {
    response.status(202).send({
      message: 'read product',
      id,
    });
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'create action',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return {
      message: 'update action',
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: 'delete action',
      id,
    };
  }
}
