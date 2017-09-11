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
  @Input() isRequired: Boolean;
  @Output() modelChange = new EventEmitter<string | number>();
  id: string;

  constructor() { }

  ngOnInit() {
    this.id = this.placeholder + Math.round(Math.random() * 100000).toString();
  }
  onChange() {
    this.modelChange.emit(this.model);
  }
}
