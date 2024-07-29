import { Component, OnInit } from '@angular/core';
import { FilterProductService } from '../filterd-products.service';
import { productSchema } from '../product.interface';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-store-products',
  templateUrl: './store-products.component.html',
  styleUrl: './store-products.component.css'
})
export class TargetComponent implements OnInit {
  filteredProducts: productSchema[] = [];

  constructor(private FilterProductService: FilterProductService) {}

  ngOnInit(): void {
    this.FilterProductService.filteredProducts$.subscribe((products) => {
      this.filteredProducts = products;
      console.log('Filtered Products in TargetComponent:', this.filteredProducts);
    });
  }
}
