import { Component, OnInit } from '@angular/core';
import { PrInputComponent } from '../core/pr-input/pr-input.component';
import { Form } from '@angular/forms';

import { LoginService } from '../login.service';

import { ILoginrequest } from '../interfaces/loginrequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest: ILoginrequest;
  LoginSerice: LoginService;
  constructor(loginService: LoginService) {
    this.loginRequest = {};
    this.LoginSerice = loginService;
  }

  ngOnInit() {
  }
  Login() {
    console.log(this.loginRequest);
    this.LoginSerice.login(this.loginRequest);
  }
}
