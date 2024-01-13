import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderReviewDialogComponent } from '../dialog/order-review-dialog/order-review-dialog.component';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(private orderService :OrderService, public dialog: MatDialog){

  }
  shakeIt: boolean = false;
  noOfItems: number = 0;

  ngOnInit(): void {
    this.orderService.getFoodList().subscribe((foodItemList)=>{
      this.noOfItems = foodItemList.length;
      this.shakeIt=true;
      setTimeout(() => {
        this.shakeIt = false;
      },
      500);
    })
  }

  openOrderReviewDialog() {
    const dialogRef = this.dialog.open(OrderReviewDialogComponent, {
      height: '80vh',
      width: '80vw',
      disableClose: true,
      restoreFocus: false,
      closeOnNavigation: true
    }); 

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
