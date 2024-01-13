import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Food } from '../../data/food';

@Component({
  selector: 'app-order-review-dialog',
  templateUrl: './order-review-dialog.component.html',
  styleUrls: ['./order-review-dialog.component.css'],
})
export class OrderReviewDialogComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogRef: MatDialogRef<OrderReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string },
    private orderService: OrderService
  ) {}

  orderItems = { items: [] as Food[] };
  ngOnInit(): void {
    this.orderService.getFoodList().subscribe((foodItemList) => {
      this.orderItems = foodItemList.reduce(
        (acc, foodItem) => {
          let id = foodItem.id;
          let filteredFoodItem = acc.items.filter((foodItem) => {
            if (id == foodItem.id) {
              return true;
            }
            return false;
          });

          if (filteredFoodItem.length > 0) {
            acc.items.forEach((foodItem) => {
              if (foodItem.id == id) {
                if (foodItem.quantity) {
                  foodItem.quantity++;
                }
              }
            });
          } else {
            foodItem.quantity = 1;
            acc.items.push(foodItem);
          }
          return acc;
        },
        { items: [] as Food[] }
      );
    });
  }

  routeToCheckoutPage() {
    this.router.navigate(['/checkOutPage'], {relativeTo:this.route});
    this.close();
  }

  close(): void {
    this.dialogRef.close();
  }

  removeFoodItem(id: string) {
    this.orderService.removeFoodById(id);
  }

  addFoodItem(foodItem: Food) {
    this.orderService.addFood(foodItem);
  }
}
