import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { RegistrationComponent } from './registration.component';
import { AppCarouselComponent } from './app-carousel/app-carousel.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    AppCarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
