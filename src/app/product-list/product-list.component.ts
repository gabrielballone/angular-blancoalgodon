import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  product = {
    "name":"Percal 2 1/2 plazas flores",
    "type":"Sabanas",
    "price":"$1500",
    "stock":"3"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
