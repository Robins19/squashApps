import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDetailsForm: FormGroup;
  submitted: boolean;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
    this.intialiseForm();
  }
  intialiseForm() {
    this.loginDetailsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get f() { return this.loginDetailsForm.controls; }

  onSubmit(user) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginDetailsForm.invalid) {
      return;
    }
    localStorage.setItem("isLoginDetailsSubmit", "1")
    this.router.navigate(['/home']);
  }
}
