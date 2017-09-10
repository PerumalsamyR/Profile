import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { flyinfromLeftAnimation } from '../animation';

@Component({
  selector: 'app-projworked',
  templateUrl: './projworked.component.html',
  styleUrls: ['./projworked.component.css'],
  animations: [
    flyinfromLeftAnimation
  ]
})
export class ProjworkedComponent implements OnInit {

  AppService: AppService;
  constructor(appService: AppService) {
    this.AppService = appService;
  }


  ngOnInit() {
  }

}
