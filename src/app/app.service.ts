import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { IProfile } from './interfaces/profile';

@Injectable()
export class AppService {
  profile: IProfile;

  constructor(private firebaseDB: AngularFireDatabase) {
  }
  getProfileData(): void {
    this.firebaseDB.object('/Profile').subscribe(
      profile => { this.profile = profile; }
    );
  }
}
