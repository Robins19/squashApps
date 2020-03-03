import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from  'ng-otp-input';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';




const aclRoutes: Routes = [

  {
    path: '',
    component: PersonalDetailsComponent
  },
  {
    path: 'personal-details',
    component: PersonalDetailsComponent
    },
  {
    path: 'company-details',
    component: CompanyDetailsComponent
    },
  {
    path: 'email-verification',
    component: EmailVerificationComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'personal-details',
    pathMatch: 'full'
  }
];



@NgModule({
  declarations: [PersonalDetailsComponent, CompanyDetailsComponent, EmailVerificationComponent,LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(aclRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule
  ],

})
export class OrganisationRegistrationFormModule { }
