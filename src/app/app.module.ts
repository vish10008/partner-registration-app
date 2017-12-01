import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { RestClient } from './rest.client';

import { PageModule } from './page/page.module';
import { RegistrationModule } from './registration/registration.module';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { OnlinePaymentModule, OnlinePaymentRoutes } from './online-payment/online-payment.module';
import { OtherPaymentModesModule } from './other-payment-modes/other-payment-modes.module';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { OtherPaymentModesComponent } from './other-payment-modes/other-payment-modes.component';
import { OnlinePaymentComponent } from './online-payment/online-payment.component';

import { AppState, } from './app.state';
import { UserState } from './user/user.state';

import { AppService } from './app.service';

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'other-payment-options', redirectTo: '/other-payment-modes', pathMatch: 'full' },
  { path: 'other-payment-modes', component: OtherPaymentModesComponent },
  { path: 'online-payment', component: OnlinePaymentComponent, children: OnlinePaymentRoutes }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    PageModule,
    RegistrationModule,
    LoginModule,
    UserModule,
    OnlinePaymentModule,
    OtherPaymentModesModule
  ],
  providers: [
    RestClient,
    AppState,
    UserState,
    AppService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
