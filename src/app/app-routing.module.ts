import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlanqueriaAboutComponent } from './blanqueria-about/blanqueria-about.component';
import { BlanqueriaProductsComponent } from './blanqueria-products/blanqueria-products.component';

const routes: Routes = [
{ path: '', redirectTo: 'products', pathMatch: 'full'},
{ path: 'about', component: BlanqueriaAboutComponent },
{ path: 'products', component: BlanqueriaProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
