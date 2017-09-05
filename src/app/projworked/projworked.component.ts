import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-projworked',
  templateUrl: './projworked.component.html',
  styleUrls: ['./projworked.component.css']
})
export class ProjworkedComponent implements OnInit {

  AppService: AppService;
  constructor(appService: AppService) {
    this.AppService = appService;
  }


  ngOnInit() {
  }

}
