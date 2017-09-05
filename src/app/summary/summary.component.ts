import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  AppService: AppService;
  constructor(appService: AppService) {
    this.AppService = appService;
  }

  ngOnInit() {
  }

}
