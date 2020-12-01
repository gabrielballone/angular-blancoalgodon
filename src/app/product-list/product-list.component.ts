import { Component, OnInit } from "@angular/core";
import { Product } from "./Product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      name: "Percal 2 1/2 plazas flores",
      type: "Sabanas",
      price: 1500,
      stock: 3,
      quantity: 0
    },
    {
      name: "Pluma 2 1/2 plazas rayas",
      type: "Acolchado",
      price: 3000,
      stock: 1,
      quantity: 0
    },
    {
      name: "Toallon playero Agatha",
      type: "Toallones",
      price: 800,
      stock: 0,
      quantity: 0
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  upQuantity(product: Product): void {
    if (product.quantity < product.stock) product.quantity++;
  }

  downQuantity(product: Product): void {
    if (product.quantity > 0) product.quantity--;
  }

  onChangeQuantity(event, product: Product): void {
    // if (event.key >= 0 && event.key <= 9 ){
    //   event.preventDefault();
    // }
    console.log(event);
  }
}
