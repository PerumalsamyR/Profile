import { Component, OnInit, Input, Output, } from '@angular/core';
import { MdInput, MdFormField } from '@angular/material';

@Component({
  selector: 'app-pr-input',
  templateUrl: './pr-input.component.html',
  styleUrls: ['./pr-input.component.css']
})
export class PrInputComponent implements OnInit {

  @Input() Model: string | number;
  @Input() placeholder: string;
  @Input() type: string;
  constructor() { }

  ngOnInit() {
  }

}
