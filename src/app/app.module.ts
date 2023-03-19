import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './components/home/home.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopDealsComponent } from './components/top-deals/top-deals.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TopDealsByCategoryComponent } from './components/top-deals-by-category/top-deals-by-category.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { TopDealsHeaderComponent } from './components/top-deals-header/top-deals-header.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicineComponent,
    TopDealsComponent,
    TopDealsByCategoryComponent,
    ViewProductDetailsComponent,
    TopDealsHeaderComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
