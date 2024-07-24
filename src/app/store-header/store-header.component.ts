import { Component } from '@angular/core';
import {FiltersListComponent} from '../filters-list/filters-list.component'
@Component({
  selector: 'app-store-header',
  templateUrl: './store-header.component.html',
  styleUrl: './store-header.component.css'
})
export class StoreHeaderComponent  extends FiltersListComponent{

  
  get_Data(){
    console.log(this.Max_Price);
    console.log(this.Min_Price);
    console.log(this.title_search);
  }



}
