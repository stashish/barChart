import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService , Product } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-product-details-component',
  templateUrl: './product-details-component.component.html',
  styleUrls: ['./product-details-component.component.scss']
})
export class ProductDetailsComponentComponent implements OnInit {
  products: Product[] = [];
  displayDialog: boolean = false;
  selectedProduct: Product = {} as Product;
  newProduct: boolean = true; 
  barChartData: any[] = [];

  productForm: FormGroup;

  constructor(
    private productService: ProductServiceService,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = this.productService.getProducts();
    this.updateBarChartData();
  }

  showDialogToAdd(): void {
    this.newProduct = true; 
    this.selectedProduct = {} as Product;
    this.displayDialog = true;
    this.productForm.reset();
  }

  save(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      this.selectedProduct.name = formData.name;
      this.selectedProduct.price = formData.price;
      this.selectedProduct.category = formData.category;

      if (this.newProduct) {
        this.productService.addProduct(this.selectedProduct);
      } else {
        this.productService.updateProduct(this.selectedProduct);
      }
      this.displayDialog = false;
      this.loadProducts();
    }
  }

  editProduct(product: Product): void {
    this.newProduct = false;
    this.selectedProduct = { ...product };
    this.displayDialog = true;
    this.productForm.patchValue({
      name: this.selectedProduct.name,
      price: this.selectedProduct.price,
      category: this.selectedProduct.category
    });
  }

  deleteProduct(product: Product): void {
    this.productService.deleteProduct(product);
    this.loadProducts();
  }

  private updateBarChartData(): void {
    this.barChartData = this.products.map(product => {
      return { name: product.name, value: product.price };
    });
  }

}
