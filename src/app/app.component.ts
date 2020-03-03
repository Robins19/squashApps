import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isPersonalDetails: any;
  isOtpDetails: any;
  isCompanyDetails: any;
  intervalId:any;
  isPersonalCheck: any;
  isCompanyCheck: any;
  isOtpCheck: any;
  constructor() { }

  ngOnInit(): void {
   this.startInterval()
  

  }
  title = 'squash-apps';
  startInterval() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(()=>{
      this.updateLocalstorage()
    }, 1000);
  }
updateLocalstorage(){
  this.isPersonalDetails =JSON.parse(localStorage.getItem('isPersonalDetailsSubmit'));
  this.isCompanyDetails = JSON.parse(localStorage.getItem('companyDetails'));
  this.isOtpDetails = JSON.parse(localStorage.getItem('isOtpSubmit'));
  this.isPersonalCheck =JSON.parse(localStorage.getItem('isPersonalDetailsCheck'));
  this.isCompanyCheck =JSON.parse(localStorage.getItem('isCompanyDetailsCheck'));
  this.isOtpCheck =JSON.parse(localStorage.getItem('isOtpCheck'));
  console.log( this.isPersonalDetails,this.isCompanyDetails,this.isOtpDetails,)
}
}
