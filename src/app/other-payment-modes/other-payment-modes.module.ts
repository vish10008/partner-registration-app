import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { OtherPaymentModesComponent } from './other-payment-modes.component';

@NgModule({
  declarations: [
    OtherPaymentModesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    OtherPaymentModesComponent
  ]
})
export class OtherPaymentModesModule { }
