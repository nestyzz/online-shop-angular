import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(private ProductsService: ProductsService) { }
  favourites: IProducts[]
  favouritesSubscription:Subscription

  ngOnInit() {
    this.favouritesSubscription=this.ProductsService.getProductFromFavourites().subscribe((data)=>this.favourites=data);
  }

  ngOnDestroy(){
    if (this.favouritesSubscription) this.favouritesSubscription.unsubscribe();
  }

  deleteItemFromFavourites(item:IProducts){
    this.ProductsService.removeProductFromFavourites(item.id).subscribe(()=>{
      let idx = this.favourites.findIndex((data)=>data.id===item.id);
      this.favourites.splice(idx,1);
    })
  }

}
