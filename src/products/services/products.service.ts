import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from '../entities/product.entity';

import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 500,
      description: 'desc1',
      stock: 5,
      image: 'imageUrl',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const productInDB = this.products.find((product) => product.id == id);

    if (!productInDB) {
      throw new NotFoundException(`The product with id ${id} doesnt exist`);
    }

    return productInDB;
  }

  create(payload: CreateProductDto) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const productToUpdate = this.products.find((product) => product.id == id);
    const indexToUpdate = this.products.findIndex(
      (product) => product.id === id,
    );
    if (!productToUpdate) {
      return `product with id ${id} doesn't exist`;
    }
    this.products[indexToUpdate] = {
      ...productToUpdate,
      ...payload,
    };
    return this.products[indexToUpdate];
  }

  remove(id: number) {
    const productToErase = this.findOne(id);
    const indexToErase = this.products.findIndex((item) => item.id === id);
    this.products.splice(indexToErase, 1);
    return indexToErase;
  }
}
