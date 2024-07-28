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



@NgModule({
  declarations: [
    AppComponent,
    StoreHeaderComponent,
    StoreProductsComponent,
    FiltersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
