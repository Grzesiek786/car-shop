import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: 'cars/:id', component: CarCardComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
