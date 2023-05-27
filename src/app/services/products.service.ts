import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:string = "https://fakestoreapi.com/products"
  urlBasket:string = "http://localhost:3000/basket"
  urlFavourites:string="http://localhost:3000/favourites"
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<IProducts[]>(this.url)
  }

  getProduct (id:number){
    return this.http.get<IProducts>(`${this.url}/${id}`)
  }

  postProductToBasket(product:IProducts){
    return this.http.post<IProducts>(this.urlBasket, product);
  }

  getProductFromBasket(){
    return this.http.get<IProducts[]>(this.urlBasket)
  }

  updateProductToBasket(product:IProducts){
    return this.http.put<IProducts>(`${this.urlBasket}/${product.id}`,product);
  }

  removeProductFromBasket(id:Number){
    return this.http.delete<any>(`${this.urlBasket}/${id}`)
  }



  postProductToFavourites(product:IProducts){
    return this.http.post<IProducts>(this.urlFavourites, product);
  }

  getProductFromFavourites(){
    return this.http.get<IProducts[]>(this.urlFavourites)
  }

  updateProductToFavourites(product:IProducts){
    return this.http.put<IProducts>(`${this.urlFavourites}/${product.id}`,product);
  }

  removeProductFromFavourites(id:Number){
    return this.http.delete<any>(`${this.urlFavourites}/${id}`)
  }

}
