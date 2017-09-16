import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pr-textarea',
  templateUrl: './pr-textarea.component.html',
  styleUrls: ['./pr-textarea.component.css']
})
export class PrTextareaComponent implements OnInit {

  @Input() model: string | number;
  @Input() placeholder: string;
  @Input() isRequired: Boolean;
  @Output() modelChange = new EventEmitter<string | number>();
  @Output() change = new EventEmitter<string | number>();
  @Output() blur = new EventEmitter<string | number>();

  id: string;
  constructor() { }

  ngOnInit() {
    this.id = this.placeholder + Math.round(Math.random() * 100000).toString();
  }
  onChange() {
    this.modelChange.emit(this.model);
    this.change.emit();
  }
  onBlur() {
    this.blur.emit();
  }

}
