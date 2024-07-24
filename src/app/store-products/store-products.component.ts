import { Component , OnInit} from '@angular/core';
import { productSchema } from '../product.interface';
import { ApiFetchService } from '../api-fetch.service';
@Component({
  selector: 'app-store-products',
  templateUrl: './store-products.component.html',
  styleUrl: './store-products.component.css'
})
export class StoreProductsComponent implements OnInit{
  products:productSchema[] = [];
  constructor(private apiFetchService: ApiFetchService) {}
  ngOnInit(): void {
    this.apiFetchService.getProducts().subscribe((products) => {
    this.products = products;
    });
    }


}
