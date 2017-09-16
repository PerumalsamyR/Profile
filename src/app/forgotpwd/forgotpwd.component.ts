import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {

  constructor(private angularFire: AngularFireAuth) {
  }
  emailId: string;
  forgotform: FormGroup;
  isSuccess: boolean; isFailure: boolean;
  ngOnInit() {
  }
  onReset() {
    this.angularFire.auth.sendPasswordResetEmail(this.emailId).then((data) => {
      this.isSuccess = true; this.isFailure = false;
    }).catch((error) => {
      this.isFailure = true; this.isSuccess = false;
    });
  }
}
