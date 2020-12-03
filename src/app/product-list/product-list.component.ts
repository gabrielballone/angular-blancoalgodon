import { Component, OnInit } from "@angular/core";
import { ProductCartService } from '../product-cart.service';
import { Product } from "./Product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      image: "https://picsum.photos/id/",
      name: "Percal 2 1/2 plazas flores",
      type: "Sabanas",
      price: 1500,
      stock: 3,
      quantity: 0
    },
    {
      image: "https://picsum.photos/id/",
      name: "Pluma 2 1/2 plazas rayas",
      type: "Acolchado",
      price: 3000,
      stock: 1,
      quantity: 0
    },
    {
      image: "https://picsum.photos/id/",
      name: "Toallon playero Agatha",
      type: "Toallones",
      price: 800,
      stock: 0,
      quantity: 0
    },
    {
      image: "https://picsum.photos/id/",
      name: "Toallon playero Mimo",
      type: "Toallones",
      price: 900,
      stock: 10,
      quantity: 0
    },
    {
      image: "https://picsum.photos/id/",
      name: "Algodon 2 1/2 plazas rayas",
      type: "Sabana",
      price: 3000,
      stock: 6,
      quantity: 0
    }
  ];

  constructor(private cart:ProductCartService) {}

  ngOnInit(): void {
    this.products.forEach(element => {
      let randomID = 1 + Math.floor((80 - 1) * Math.random());
      element.image += randomID.toString() + "/100/100"      
    });	
  }

  addToCart(product):void{
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }
}
