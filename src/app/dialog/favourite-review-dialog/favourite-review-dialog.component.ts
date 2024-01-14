import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../../data/food';
import { OrderService } from '../../services/order.service';
import { OrderReviewDialogComponent } from '../order-review-dialog/order-review-dialog.component';
import { FavouriteService } from '../../services/favourite.service';

@Component({
  selector: 'app-favourite-review-dialog',
  templateUrl: './favourite-review-dialog.component.html',
  styleUrl: './favourite-review-dialog.component.css'
})
export class FavouriteReviewDialogComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogRef: MatDialogRef<FavouriteReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string },
    private favouriteService: FavouriteService
  ) {}

  favouriteItems = [] as Food[];
  ngOnInit(): void {
    this.favouriteService.getfavouriteList().subscribe((foodItemList) => {
      this.favouriteItems = foodItemList;
    });
  }


  close(): void {
    this.dialogRef.close();
  }

  removeFoodItem(id: string) {
    this.favouriteService.removefavouriteById(id);
  }

  addFoodItem(foodItem: Food) {
    this.favouriteService.addfavourite(foodItem);
  }
}
