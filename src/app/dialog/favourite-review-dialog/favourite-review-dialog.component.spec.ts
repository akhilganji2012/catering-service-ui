import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteReviewDialogComponent } from './favourite-review-dialog.component';

describe('FavouriteReviewDialogComponent', () => {
  let component: FavouriteReviewDialogComponent;
  let fixture: ComponentFixture<FavouriteReviewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteReviewDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavouriteReviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
