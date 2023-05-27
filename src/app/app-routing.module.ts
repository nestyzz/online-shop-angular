import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProductResolver } from './services/product.resolver';
import { FavouritesComponent } from './components/favourites/favourites.component';

const routes: Routes = [
  {path:'', component: ProductsComponent},
  {path:'products', component: ProductsComponent},
  {path:'products/:id', component: ProductDetailsComponent, resolve: {data: ProductResolver}},
  {path:'basket', component: BasketComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path:"**", redirectTo: "", component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [],
})
export class AppRoutingModule { }
