import { FavouriteService } from './../services/favourite.service';
import { FavouriteReviewDialogComponent } from './../dialog/favourite-review-dialog/favourite-review-dialog.component';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderReviewDialogComponent } from '../dialog/order-review-dialog/order-review-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    public dialog: MatDialog,
    private favouriteService: FavouriteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  shakeIt: boolean = false;
  favShakeIt: boolean = false;

  noOfItems: number = 0;

  ngOnInit(): void {
    this.orderService.getFoodList().subscribe((foodItemList) => {
      this.noOfItems = foodItemList.length;
      this.shakeIt = true;
      setTimeout(() => {
        this.shakeIt = false;
      }, 500);
    });
    this.favouriteService.getfavouriteList().subscribe((foodItemList) => {
      this.favShakeIt = true;
      setTimeout(() => {
        this.favShakeIt = false;
      }, 500);
    });
  }
  openFavouriteReviewDialog() {
    const favDialogRef = this.dialog.open(FavouriteReviewDialogComponent, {
      height: '80vh',
      width: '80vw',
      disableClose: true,
      restoreFocus: false,
      closeOnNavigation: true,
    });
  }
  openOrderReviewDialog() {
    const dialogRef = this.dialog.open(OrderReviewDialogComponent, {
      height: '80vh',
      width: '80vw',
      disableClose: true,
      restoreFocus: false,
      closeOnNavigation: true,
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  navOrderStatusPage() {
    this.router.navigate(['/orderStatus'], {relativeTo:this.route});
  }
}
