import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ILoginrequest } from '../app/interfaces/loginrequest';

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
        this._router.navigate(['/home']);
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
}
