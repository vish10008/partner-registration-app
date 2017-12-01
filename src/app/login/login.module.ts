import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { LoginComponent } from './login.component';
import { OtherPaymentModesHintComponent } from './other-payment-modes-hint/other-payment-modes-hint.component';
import { AppCarouselComponent } from './app-carousel/app-carousel.component';

@NgModule({
  declarations: [
    LoginComponent,
    OtherPaymentModesHintComponent,
    AppCarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
