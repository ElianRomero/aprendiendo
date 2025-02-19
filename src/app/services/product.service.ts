import { Injectable } from '@angular/core';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product
  constructor() {
    this.product = {
      id: 1,
      name: 'Product1',
      price: 100,
      description: 'This is a product',
      image: 'https://via.placeholder.com/150',
      category: 'category 1',
      quantity: 10
    }
  }
  setProductName(name: string,price: number): void {
    this.product.name = name;
    this.product.price = 200;
  }
}
