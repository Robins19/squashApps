import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  companyDetailsForm: FormGroup;
  submitted: boolean;
  obj: any;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("isPersonalDetailsSubmit")) {
      localStorage.removeItem("isPersonalDetailsSubmit");
    }
    localStorage.setItem("companyDetails", "2")
    this.intialiseForm()
  }

  ngOnDestroy() {
    if (localStorage.getItem("companyDetails")) {
      localStorage.removeItem("companyDetails");
    }
  }
  intialiseForm() {
    this.companyDetailsForm = this.formBuilder.group({
      company_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      job_title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      agree_with_terms_and_conditions: ['', [Validators.required]],
    });
  }
  get f() { return this.companyDetailsForm.controls; }

  onSubmit(user) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.companyDetailsForm.invalid) {
      return;
    }
    this.obj = {
      company_name: this.companyDetailsForm.controls.company_name.value,
      email: this.companyDetailsForm.controls.email.value,
      job_title: this.companyDetailsForm.controls.job_title.value,
      category: this.companyDetailsForm.controls.category.value,
      agree_with_terms_and_conditions: this.companyDetailsForm.controls.agree_with_terms_and_conditions.value

    }
    localStorage.setItem("companyDetailsData", JSON.stringify(this.obj))
    localStorage.setItem("isCompanyDetailsCheck", "1")
    this.router.navigate(['/email-verification']);
  }

}
