import { Component, OnInit, ViewChild } from '@angular/core';
import { IBasket } from 'src/app/models/basket';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {

  ngOnInit() {
  }

  searchText = '';
  items=fetch("https://fakestoreapi.com/products?")
  .then((res) => res.json())
  .then((json) => console.log(json));

}

