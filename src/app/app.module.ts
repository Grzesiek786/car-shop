import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CarService} from "./car.service";
import {HttpClientModule} from "@angular/common/http";
import {components} from "./components";
import { CartComponent } from './components/cart/cart.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CountComponent } from './components/count/count.component';

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    CartComponent,
    TopBarComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
