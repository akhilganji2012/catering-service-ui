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


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [{ path: 'checkOutPage', component: CheckOutPageComponent }],
  }
  // ,
  // {
  //   path:'checkOutPage', component: CheckOutPageComponent
  // }
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
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    // AppRoutingModule,
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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
  providers: [OrderService, UtilsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
