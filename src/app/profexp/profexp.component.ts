import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-profexp',
  templateUrl: './profexp.component.html',
  styleUrls: ['./profexp.component.css']
})
export class ProfexpComponent implements OnInit {
  AppService: AppService;
  constructor(appService: AppService) {
    this.AppService = appService;
  }

  ngOnInit() {
  }

}
