import { Component, OnInit } from '@angular/core';
import { productSchema } from '../product.interface';
import { ApiFetchService } from '../api-fetch.service';
import { NgForm } from '@angular/forms';
import { FilterProductService } from '../filterd-products.service';
@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.css']
})
export class FiltersListComponent implements OnInit {

  products: productSchema[] = [];
  filteredProducts: productSchema[] = [];

  constructor(private apiFetchService: ApiFetchService, private FilterProductService: FilterProductService) {}
  ngOnInit(): void {
    this.apiFetchService.getProducts().subscribe((products) => {
      this.products = products;
      console.log('Products fetched:', this.products);
    });
  }

  filterData = {
    categoriesFilter: 'all'
  };

  onFromSubmit(form: NgForm): void {
    console.log('Form submitted', form.value);

    this.filteredProducts = this.products.filter((product) => {

      let Min_price = form.value.Min_Price ? form.value.Min_Price : 0;
      let Max_price = form.value.Max_Price ?  form.value.Max_Price : 2000000;

      return product.title.toLowerCase().includes(form.value.searchedProduct.toLowerCase()) &&
        product.price >= Number(Min_price) &&
        product.price <= Number(Max_price) &&
        (form.value.categoriesFilter === 'all' || product.category === form.value.categoriesFilter);
    });

    console.log('Filtered Products:', this.filteredProducts);

    this.FilterProductService.updateFilteredProducts(this.filteredProducts);  }
}
