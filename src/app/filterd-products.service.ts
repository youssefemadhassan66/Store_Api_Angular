import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productSchema } from './product.interface';


@Injectable({
  providedIn: 'root'
})
export class FilterProductService {
  private filteredProductsSource = new BehaviorSubject<productSchema[]>([]);
  filteredProducts$ = this.filteredProductsSource.asObservable();

  updateFilteredProducts(products: productSchema[]): void {
    this.filteredProductsSource.next(products);
  }
}
