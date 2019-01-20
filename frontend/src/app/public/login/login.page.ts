import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  loginError: string;

  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
  }

  login() {
    const data = this.loginForm.value;
    const credentials = {
      email: data.email,
      password: data.password
    };
    this.authService.signInWithEmail(credentials).then(
      resp => console.log('Logged-in', resp),
      error => this.loginError = error.message
    );
  }

}
