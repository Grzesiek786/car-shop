import { Injectable } from '@angular/core';
import { ICar } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: ICar[] = [];

  constructor() { }

  addToCart(car: ICar) {
    this.items.push(car);
  }

  getItems() {
    return this.items
  }

  clearItems() {
    this.items = [];
    return this.items;
  }

  
}
