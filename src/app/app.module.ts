import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/UI/header/header.component';
import { FooterComponent } from './components/UI/footer/footer.component';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ProductsComponent} from './components/products/products.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component'
import {BasketComponent} from './components/basket/basket.component'
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {SortingPipe} from '../pipe/sorting.pipe';
import {MatMenuModule} from '@angular/material/menu';
import {SortingIncreasePipe} from '../pipe/sorting-increase.pipe'
import { FavouritesComponent } from './components/favourites/favourites.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductDetailsComponent,
    BasketComponent,
    FavouritesComponent,
    SortingPipe,
    SortingIncreasePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
