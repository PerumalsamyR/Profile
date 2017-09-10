import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { flyinfromLeftAnimation } from '../animation';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    flyinfromLeftAnimation
  ]
})
export class SkillsComponent implements OnInit {

  AppService: AppService;
  constructor(appService: AppService) {
    this.AppService = appService;
  }

  ngOnInit() {
  }

}
