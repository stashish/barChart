import { Injectable } from '@angular/core';

export interface Product {
  id?: number;
  name: string;
  price: number;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private products: Product[] = [
    { id: 1, name: 'Apple', price: 100, category: 'I Phone' },
    { id: 2, name: 'Samsung', price: 150, category: 'Android' },
  ];

  getProducts(): Product[] {
    return [...this.products];
  }

  addProduct(product: Product): void {
    product.id = this.generateProductId();
    this.products.push(product);
  }

  updateProduct(product: Product): void {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = { ...product };
    }
  }

  deleteProduct(product: Product): void {
    this.products = this.products.filter(p => p.id !== product.id);
  }

  private generateProductId(): number {
    return this.products.length ? Math.max(...this.products.map(p => p.id as number)) + 1 : 1;
  }
  
}
