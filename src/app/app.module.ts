import { FavouriteReviewDialogComponent } from './dialog/favourite-review-dialog/favourite-review-dialog.component';
import { UtilsService } from './utils/utils.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { TitleComponent } from './title/title.component';
import { MatIconModule } from '@angular/material/icon';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { OrderComponent } from './order/order.component';
import { ItemComponent } from './item/item.component';
import { MatCardModule } from '@angular/material/card';
import { OrderReviewDialogComponent } from './dialog/order-review-dialog/order-review-dialog.component';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';
import { CheckOutPageComponent } from './check-out-page/check-out-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderService } from './services/order.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FavouriteService } from './services/favourite.service';
import { OrderStatusComponent } from './order-status/order-status.component';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '', component: HomePageComponent
  }
  ,
  {
    path:'checkOutPage', component: CheckOutPageComponent
  },
  {
    path:'orderStatus', component: OrderStatusComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    SlideShowComponent,
    OrderComponent,
    ItemComponent,
    OrderReviewDialogComponent,
    CheckOutPageComponent,
    HomePageComponent,
    FavouriteReviewDialogComponent,
    OrderStatusComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [RouterModule],
  providers: [OrderService, UtilsService, FavouriteService, RestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
