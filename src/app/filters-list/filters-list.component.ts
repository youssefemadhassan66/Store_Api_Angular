import { Component } from '@angular/core';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrl: './filters-list.component.css'
})
export class FiltersListComponent {
  
  protected title_search:string = "";
  protected Min_Price:number | string = "";
  protected Max_Price:number | string ="";
  onSubmit(){
    console.log(this.title_search);
    console.log(this.Min_Price);
    console.log(this.Max_Price);

  }
}

