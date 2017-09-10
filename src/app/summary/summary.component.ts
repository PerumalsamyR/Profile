import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { flyinfromLeftAnimation } from '../animation';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  animations: [
    flyinfromLeftAnimation
  ]
})
export class SummaryComponent implements OnInit {
  AppService: AppService;
  constructor(appService: AppService) {
    this.AppService = appService;
  }

  ngOnInit() {
  }

}
