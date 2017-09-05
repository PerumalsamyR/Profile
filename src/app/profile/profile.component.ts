import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { IProfile } from '../interfaces/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: IProfile;
  AppService: AppService;
  constructor(appService: AppService) {
    this.AppService = appService;
  }
  ngOnInit() {
    this.AppService.getProfileData();
  }
}
