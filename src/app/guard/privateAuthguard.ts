import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot} from '@angular/router';
@Injectable()
export class PrivateCheckGuard implements CanActivate {
  constructor(private router: Router) {}
  // i have used CanActivate, because this guard function is called when user tries to navigate into the route
  canActivate(): boolean {
    if (!localStorage.getItem('otpData')) {
      return true;
    } else {
    if(localStorage.getItem('otpData') ||localStorage.getItem('isLoginDetailsSubmit')) {
      this.router.navigate(['/home']);
      }
       return false;
     }
  }
}
