import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {
  otp: any;
  showOtpComponent: boolean;
  personalDetailsData: any;
  companyDetailsData: any;
  data: any;
  isdisabled: boolean;
  // otpDetailsForm:FormGroup;
  constructor( private router: Router) { }

  ngOnInit(): void {
    this.isdisabled = true;
    if (localStorage.getItem("isPersonalDetailsSubmit")) {
      localStorage.removeItem("isPersonalDetailsSubmit");
    } else if (localStorage.getItem("companyDetails")) {
      localStorage.removeItem("companyDetails");
    }
    localStorage.setItem("isOtpSubmit", "1")
    this.showOtpComponent = true;
  }

  ngOnDestroy() {
    if (localStorage.getItem("isOtpSubmit")) {
      localStorage.removeItem("isOtpSubmit");
    }
  }

  config = {
    allowNumbersOnly: false,
    length: 5,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };

  onOtpChange(otp) {
    this.otp = otp;
    if (this.otp.length == 5) {
      this.isdisabled = false;
    }
  }
  verify() {
    localStorage.setItem("otpData", JSON.stringify(this.otp))
    localStorage.setItem("isOtpCheck", "1")
    this.router.navigate(['/home'])
  }
}
