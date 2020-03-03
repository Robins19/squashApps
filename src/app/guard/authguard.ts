import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
@Injectable()
export class CheckGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (!localStorage.getItem('personalData')) {
      this.router.navigate(['/personal-details']);
    }else if(!localStorage.getItem('companyDetailsData')){
        this.router.navigate(['/company-details'])
    }else if(!localStorage.getItem('otpData')){
        this.router.navigate(['/email-verification'])
    } else {
      return true;
     }
  }
}
