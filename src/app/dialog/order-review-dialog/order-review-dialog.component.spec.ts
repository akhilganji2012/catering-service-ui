import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReviewDialogComponent } from './order-review-dialog.component';

describe('OrderReviewDialogComponent', () => {
  let component: OrderReviewDialogComponent;
  let fixture: ComponentFixture<OrderReviewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReviewDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderReviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
