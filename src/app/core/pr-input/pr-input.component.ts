import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdInput, MdFormField } from '@angular/material';

@Component({
  selector: 'app-pr-input',
  templateUrl: './pr-input.component.html',
  styleUrls: ['./pr-input.component.css']
})
export class PrInputComponent implements OnInit {

  @Input() model: string | number;
  @Input() placeholder: string;
  @Input() type: string;
  @Output() modelChange = new EventEmitter<string | number>();

  constructor() { }

  ngOnInit() {
  }
  onChange() {
    this.modelChange.emit(this.model);
    console.log(this.model);
  }
}
