import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgOtpInputModule } from  'ng-otp-input';
import {OrganisationRegistrationFormModule} from './organisation-registration-form/organisation-registration-form.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOtpInputModule,
    OrganisationRegistrationFormModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
