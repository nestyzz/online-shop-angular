import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBasket } from 'src/app/models/basket';
import { IProducts } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { BasketComponent } from '../basket/basket.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  quantity:number;

  filteredProducts: IProducts[];
  searchValue: String;
  sortingColumn:string;
  sortingIncreaseColumn:string;

  constructor(private ProductsService: ProductsService) { }
  products: IProducts[];
  product: IProducts;
  productsSubscription: Subscription;
  basket: IProducts[];
  basketSubscription: Subscription;
  favouritesSubscription: Subscription;
  favourites: IProducts[];

  ngOnInit():void {
    this.productsSubscription=this.ProductsService.getProducts().subscribe((data)=>{
      this.products=data;
      this.filteredProducts = this.products;
    });

    this.basketSubscription = this.ProductsService.getProductFromBasket().subscribe((data)=>{
      this.basket=data;
    });

    this.favouritesSubscription = this.ProductsService.getProductFromFavourites().subscribe((data)=>{
      this.favourites=data;
    });
  }

  addToBasket(product:IProducts){
    product.quantity=1;
    let findItem;

    if (this.basket.length>0){
      findItem=this.basket.find((item)=> item.id===product.id)
      if (findItem) this.updateToBasket(findItem)
      else this.postToBasket(product)
    }
    else this.postToBasket(product);

  }

  addToFavourites(product:IProducts){
    product.quantity=1;
    let findItem;

    if (this.favourites.length>0){
      findItem=this.favourites.find((item)=> item.id===product.id)
      if (findItem) this.updateToFavourites(findItem)
      else this.postToFavourites(product)
    }
    else this.postToFavourites(product);

  }

  postToBasket(product:IProducts){
    this.ProductsService.postProductToBasket(product).subscribe((data)=>this.basket.push(data))

  }

  postToFavourites(product:IProducts){
    this.ProductsService.postProductToFavourites(product).subscribe((data)=>this.favourites.push(data))
  }

  updateToBasket(product:IProducts){
    product.quantity+=1;
    this.ProductsService.updateProductToBasket(product).subscribe((data)=>{})

  }

  updateToFavourites(product:IProducts){
    product.quantity+=1;
    this.ProductsService.updateProductToFavourites(product).subscribe((data)=>{})

  }

  ngOnDestroy(){
    if (this.productsSubscription) this.productsSubscription.unsubscribe();
    if (this.basketSubscription) this.basketSubscription.unsubscribe();

  }

  SearchFunc(searchValue:String){

    if (this.products && this.products.length>0){

    this.filteredProducts = new Array <IProducts>();
    this.products.forEach(prd => {

      if (prd.title.toLowerCase().includes(searchValue.toLowerCase()))
        this.filteredProducts.push(prd);
    })
  }
  }

  SortBy(sortCol:string){
    this.sortingColumn=sortCol;
  }

  SortByIncrease(sortCol:string){
    this.sortingIncreaseColumn=sortCol;
  }

  SortByCategory(category:string){
    if (this.products && this.products.length>0){

      this.filteredProducts = new Array <IProducts>();
      this.products.forEach(prd => {

        if (prd.category.slice(0,3) === category.slice(0,3))
          this.filteredProducts.push(prd);
      })
    }
  }

  SortByDefault(){
    this.filteredProducts=this.products;
  }

}




