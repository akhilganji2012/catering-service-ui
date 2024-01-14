import { FavouriteService } from './../services/favourite.service';
import { Component, Input } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Food } from '../data/food';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() foodItem: Food = { name: 'chicken Soup' } as Food;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute,
    private favouriteService:FavouriteService
  ) {}

  addFavouriteItem() {
    this.favouriteService.addfavourite(this.foodItem);
  }
  addFoodItem() {
    this.orderService.addFood(this.foodItem);
  }
}
