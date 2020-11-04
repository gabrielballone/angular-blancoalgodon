import { Component, OnInit } from '@angular/core';
import { Product } from './Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
    "name":"Percal 2 1/2 plazas flores",
    "type":"Sabanas",
    "price":1500,
    "stock":3
    },
    {
      "name":"Pluma 2 1/2 plazas rayas",
      "type":"Acolchado",
      "price":3000,
      "stock":1
    },
    {
      "name":"Toallon playero Agatha",
      "type":"Toallones",
      "price":800,
      "stock":0
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
