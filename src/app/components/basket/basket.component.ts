import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBasket } from 'src/app/models/basket';
import { IProducts } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {

  constructor(private ProductsService: ProductsService) {
  }
  quantity:number;
  basket: IProducts[]
  basketSubscription:Subscription
  basketProducts:IBasket

  ngOnInit() {
    this.basketSubscription=this.ProductsService.getProductFromBasket().subscribe((data)=>this.basket=data);
  }

  ngOnDestroy(){
    if (this.basketSubscription) this.basketSubscription.unsubscribe();
  }

  minusItemFromBasket(item:IProducts){
    if (item.quantity===1){
      this.ProductsService.removeProductFromBasket(item.id).subscribe(()=>{
        let idx = this.basket.findIndex((data)=>data.id===item.id);
        this.basket.splice(idx,1);
      })
    }
    else{
      item.quantity-=1;
      this.ProductsService.updateProductToBasket(item).subscribe((data)=>{})
    }
  }

  plusItemToBasket(item:IProducts){
    item.quantity+=1;
    this.ProductsService.updateProductToBasket(item).subscribe((data)=>{});
  }

  totalSum(){
    let result=[]
    let sum_res=0
    for (let prod of this.basket){
      result.push(prod.price*prod.quantity)
    }
    for (let i of result){
      sum_res+=i
    }
    return sum_res;
  }

  public totalQuantity(){
    let result=[]
    let quant_res=0
    for (let prod of this.basket){
      result.push(prod.quantity)
    }
    for (let i of result){
      quant_res+=i
    }
    this.quantity=quant_res
    return quant_res;
    //return this.quantity
  }
}
