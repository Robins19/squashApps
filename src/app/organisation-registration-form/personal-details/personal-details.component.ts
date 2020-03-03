import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  personalDetailsForm: FormGroup;
  activeTableId: number;
  submitted: boolean;
  obj: any;
  selectedGender: any;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear()
    localStorage.setItem("isPersonalDetailsSubmit", "1")

    this.intialiseForm()
  }

  ngOnDestroy() {
    if (localStorage.getItem("isPersonalDetailsSubmit")) {
      localStorage.removeItem("isPersonalDetailsSubmit");
    }
  }

  intialiseForm() {
    this.personalDetailsForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    });
  }

  get f() { return this.personalDetailsForm.controls; }

  onSubmit(user) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.personalDetailsForm.invalid) {
      return;
    }

    this.obj = {
      fullName: this.personalDetailsForm.controls.fullName.value,
      country: this.personalDetailsForm.controls.country.value,
      state: this.personalDetailsForm.controls.state.value,
      Phone: this.personalDetailsForm.controls.phone.value,
      gender: this.selectedGender
    }
    console.log(this.obj, "================")
    localStorage.setItem("personalData", JSON.stringify(this.obj))
    localStorage.setItem("isPersonalDetailsCheck", "1")
    this.router.navigate(['/company-details']);
  }

  genderTypes(types) {
    this.selectedGender = types
    switch (types) {
      case 'male':
        this.activeTableId = 1;
        break;
      case 'female':
        this.activeTableId = 2;
        break;
      case 'other':
        this.activeTableId = 3;
        break;
    }
  }



}
