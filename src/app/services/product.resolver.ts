import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, catchError, of } from 'rxjs';
import { IProducts } from '../models/product';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<IProducts> {
  constructor(private ProductsService: ProductsService, private router:Router){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProducts> {
    return this.ProductsService.getProduct(route.params?.['id']).pipe(
      catchError( ()=>{
        this.router.navigate(['../components/products']);
        return EMPTY;
      })
    );
  }
}
