
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { StoreHeaderComponent } from './store-header/store-header.component';

import { StoreProductsComponent } from './store-products/store-products.component';

import { FiltersListComponent } from './filters-list/filters-list.component';

import { FormsModule } from '@angular/forms';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
