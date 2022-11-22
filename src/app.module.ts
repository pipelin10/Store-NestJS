import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/controllers/products.controller';
import { CategoriesController } from './products/controllers/categories.controller';
import { UsersController } from './users/controllers/users.controller';
import { OrdersController } from './users/controllers/orders.controller';
import { CustomersController } from './users/controllers/customers.controller';
import { BrandsController } from './products/controllers/brands.controller';
import { ProductsService } from './products/services/products.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, ProductsModule],
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
