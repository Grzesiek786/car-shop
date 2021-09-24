import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ICar } from 'src/app/shared/interfaces';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  constructor(private cartService: CartService, private location: Location) { }

  ngOnInit(): void {
    
  }

  onDelete() {
    this.items = this.cartService.clearItems();
    this.location.back();
  }

  onDeleteItem(car: ICar) {
    this.items = this.items.filter(h => h != car);
    return this.items;
    
  }

}
