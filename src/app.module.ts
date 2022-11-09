import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './modules/products.controller';
import { CategoriesController } from './modules/categories.controller';
import { UsersController } from './modules/users.controller';
import { OrdersController } from './modules/orders.controller';
import { CustomersController } from './modules/customers.controller';
import { BrandsController } from './modules/brands.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    UsersController,
    OrdersController,
    CustomersController,
    BrandsController,
  ],
  providers: [AppService, ProductsService],
})
export class AppModule {}
