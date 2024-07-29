import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreHeaderComponent } from './store-header/store-header.component';
import { StoreProductsComponent } from './store-products/store-products.component';
import { FiltersListComponent } from './filters-form/filters-list.component';
import { FormsModule } from '@angular/forms';
import {ApiFetchService } from './api-fetch.service'
import { FilterProductService } from './filterd-products.service';



@NgModule({
  declarations: [
    AppComponent,
    StoreHeaderComponent,
    FiltersListComponent,
    StoreProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiFetchService,
    FilterProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
