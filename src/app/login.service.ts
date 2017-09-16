import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ILoginrequest } from '../app/interfaces/loginrequest';
import { ISignuprequest } from '../app/interfaces/signuprequest';

import * as firebase from 'firebase/app';

@Injectable()
export class LoginService {

  constructor(private _angularFire: AngularFireAuth,
    private _router: Router) { }
  login(value: ILoginrequest) {
    this._angularFire.auth
      .signInWithEmailAndPassword(
      value.Email,
      value.Password
      )
      .then(() => {
        localStorage.setItem('uid', this._angularFire.auth.currentUser.uid);
        this._router.navigate(['/profile']);
      })
      .catch(error => {
        alert(error);
      });
  }
  logout() {
    this._angularFire.auth.signOut();
    localStorage.removeItem('uid');
    this._router.navigate(['/home']);
  }
  signUp(request: ISignuprequest) {
    this._angularFire.auth.createUserWithEmailAndPassword(request.Email, request.Password).catch(
      function (error) {
      });
  }
  passwordReset(emailId: string) {
    this._angularFire.auth.sendPasswordResetEmail(emailId).then((data) => {

    }).catch((error) => {

    });
  }
  googleAuth() {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.setCustomParameters({
      'login_hint': 'user@example.com'
    });
    this._angularFire.auth.signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      // ...
    }).catch(function (error) {
    });
  }
}
