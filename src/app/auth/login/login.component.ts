import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Credential } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    // console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      if (this.loginForm.value.username == Credential.USER_NAME && this.loginForm.value.username === Credential.PASSWORD) {
        this.router.navigate(['/admin']);
      }
    }
  }
}
