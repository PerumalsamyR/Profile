import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { IProfile } from './interfaces/profile';
import { IUser } from './interfaces/user';

@Injectable()
export class AppService {
  profile: IProfile;
  currentUser: IUser;
  constructor(private firebaseDB: AngularFireDatabase) {
  }
  getProfileData(): void {
    this.firebaseDB.object('/Profile').subscribe(
      profile => { this.profile = profile; }
    );
  }
}
