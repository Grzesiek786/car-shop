import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/car.service';
import { ICar } from '../../shared/interfaces';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
})
export class CarCardComponent implements OnInit {
  @Input() car: ICar | null = null;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getCar();
  }

  addToCart(car: ICar) {
    this.cartService.addToCart(car);
    window.alert('Your product has been added');
  }

  getCar() {
    const id = +(this.route.snapshot.paramMap.get('id')!);
    console.log(id);
  }

}
