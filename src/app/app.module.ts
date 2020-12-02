import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { FormsModule } from "@angular/forms";
import { BlanqueriaAboutComponent } from './blanqueria-about/blanqueria-about.component';
import { CartComponent } from './cart/cart.component';
import { BlanqueriaProductsComponent } from './blanqueria-products/blanqueria-products.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, BlanqueriaAboutComponent, CartComponent, BlanqueriaProductsComponent, InputIntegerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
