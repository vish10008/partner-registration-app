import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';

import { OnlinePaymentComponent } from './online-payment.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { TowardsOrderComponent } from './payment-details/towards-order/towards-order.component';
import { TowardsCanveraAccountComponent } from './payment-details/towards-canvera-account/towards-canvera-account.component';
import { TowardsClassifiedsComponent } from './payment-details/towards-classifieds/towards-classifieds.component';

import { OnlinePaymentState } from './online-payment.state';

import { OnlinePaymentService } from './online-payment.service';

export const OnlinePaymentRoutes: Routes = [
    { path: '', component: PaymentDetailsComponent, children: [
        { path: 'towards-order', component: TowardsOrderComponent },
        { path: 'towards-canvera-account', component: TowardsCanveraAccountComponent },
        { path: 'towards-classifieds', component: TowardsClassifiedsComponent }
      ]
    }
];

@NgModule({
  declarations: [
    OnlinePaymentComponent,
    PaymentDetailsComponent,
    TowardsOrderComponent,
    TowardsCanveraAccountComponent,
    TowardsClassifiedsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    OnlinePaymentComponent
  ],
  providers: [
    OnlinePaymentState,
    OnlinePaymentService
  ]
})
export class OnlinePaymentModule { }
