import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pr-dropdown',
  templateUrl: './pr-dropdown.component.html',
  styleUrls: ['./pr-dropdown.component.css']
})
export class PrDropdownComponent implements OnInit {

  @Input() model: string | number;
  @Input() placeholder: string;
  @Input() isRequired: Boolean;
  @Input() options: Array<any>;
  @Output() modelChange = new EventEmitter<string | number>();
  @Output() change = new EventEmitter<string | number>();
  id: string;

  constructor() { }

  ngOnInit() {
    this.id = this.placeholder + Math.round(Math.random() * 100000).toString();
  }

  onChange() {
    this.modelChange.emit(this.model);
    this.change.emit();
  }
}
