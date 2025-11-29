import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
    );
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      alert('Please fill out the form correctly.');
      return;
    }

    const { email, password } = this.loginForm.value;

    try {
      this.authService.login(email, password);
    }
    catch (error) {
      alert('Login failed. Please check your credentials and try again.');
    }
  }
}
