import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  AppService: AppService;
  constructor(appService: AppService) {
    this.AppService = appService;
  }

  ngOnInit() {
  }

}
