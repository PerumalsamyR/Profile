import { Component, OnInit } from '@angular/core';
import { ISignuprequest } from '../interfaces/signuprequest';
import { LoginService } from '../login.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  LoginService: LoginService;
  isSuccess: boolean; isFailure: boolean;
  constructor(private angularFire: AngularFireAuth) {
  }
  signUpRequest: ISignuprequest;
  ngOnInit() {
    this.signUpRequest = {};
  }
  SignUp() {
    this.angularFire.auth.createUserWithEmailAndPassword(this.signUpRequest.Email, this.signUpRequest.Password).then((data) => {
      this.isSuccess = true; this.isFailure = false;
    }).catch(
      function (error) {
        this.isSuccess = false; this.isFailure = true;
      });
  }
  GoogleSignUp() {
    this.LoginService.googleAuth();
  }
}
