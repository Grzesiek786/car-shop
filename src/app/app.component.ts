import {Component, OnInit} from '@angular/core';
import {CarService} from "./car.service";
import {Observable} from "rxjs";
import {ICar} from "./shared/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Car Platform';
  cars$: Observable<ICar[]> = new Observable<ICar[]>();

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.cars$ = this.carService.getCars();
  }
}
