import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  AppService: AppService;
  constructor(appService: AppService) {
    this.AppService = appService;
  }


  ngOnInit() {
  }

}
