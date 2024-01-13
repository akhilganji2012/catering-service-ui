import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../data/food';

@Injectable({ providedIn: 'root' })
export class OrderService {
  foodSubjects = new BehaviorSubject<Food[]>([]);

  constructor() {}

  addFood(food: Food) {
    console.log('add: '+food.id);
    let foods: Food[] = this.foodSubjects.getValue();
    foods.push(food);
    this.foodSubjects.next(foods);
  }

  removeFoodById(id: string) {
    console.log('remove: '+id);
    let foods: Food[] = this.foodSubjects.getValue();
    let i = -1;
    if (foods.length > 0) {
      foods.forEach((foodItem, index) => {
        if (foodItem.id == id) {
          i = index;
        }
      });
      if (i >= 0) {
        foods.splice(i, 1);
        this.foodSubjects.next(foods);
      }
    }
  }

  getFoodList(): Observable<Food[]> {
    return this.foodSubjects.asObservable();
  }
}
