import { Component , OnInit} from '@angular/core';
import { productSchema } from '../product.interface';
import { ApiFetchService } from '../api-fetch.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrl: './filters-list.component.css'
})
export class FiltersListComponent {

  products:productSchema[] = [];

  constructor(private apiFetchService: ApiFetchService) {}

    // FETCHING Products
    ngOnInit(): void {

          this.apiFetchService.getProducts().subscribe((products) => {
          this.products = products;

        });
    }

    filterData = {
      searchedProduct: '',
      minPrice: null,
      maxPrice: null,
      categoriesFilter: 'all',
      sortFilter: 'a-z'
    };


    onFromSubmit(form:NgForm){
      console.log(form.value);

    }



}

