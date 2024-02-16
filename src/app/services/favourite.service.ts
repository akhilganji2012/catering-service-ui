import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../data/Food';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  favouriteSubjects = new BehaviorSubject<Food[]>([]);

  constructor() { }

  addfavourite(food: Food) {
    let favourites: Food[] = this.favouriteSubjects.getValue();
    const similarItems = favourites.filter(fav=>{
      if(fav.id === food.id){
        return true;
      }
      return false;
    })
    if(similarItems.length === 0){
    favourites.push(food);
    this.favouriteSubjects.next(favourites);
    }
  }

  removefavouriteById(id: string) {
    let favourites: Food[] = this.favouriteSubjects.getValue();
    let i = -1;
    if (favourites.length > 0) {
      favourites.forEach((favouriteItem, index) => {
        if (favouriteItem.id == id) {
          i = index;
        }
      });
      if (i >= 0) {
        favourites.splice(i, 1);
        this.favouriteSubjects.next(favourites);
      }
    }
  }

  getfavouriteList(): Observable<Food[]> {
    return this.favouriteSubjects.asObservable();
  }

}
