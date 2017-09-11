import { Component, OnInit } from '@angular/core';
import { ISignuprequest } from '../interfaces/signuprequest';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  LoginService: LoginService;
  constructor(loginService: LoginService) {
    this.LoginService = loginService;
  }
  signUpRequest: ISignuprequest;
  ngOnInit() {
    this.signUpRequest = {};
  }
  SignUp() {
    this.LoginService.signUp(this.signUpRequest);
  }
  GoogleSignUp() {
    this.LoginService.googleAuth();
  }
}
