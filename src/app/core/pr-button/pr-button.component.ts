import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pr-button',
  templateUrl: './pr-button.component.html',
  styleUrls: ['./pr-button.component.css']
})
export class PrButtonComponent implements OnInit {

  @Input() btnText: string | number;
  @Input() size: string;
  @Input() type: string;
  @Input() click: Function;
  @Output() ngClick = new EventEmitter();

  btnClass: String;
  constructor() { }

  ngOnInit() {
    if (this.type === 'primary') {
      this.btnClass = 'btn btn-primary';
    } else if (this.type === 'success') {
      this.btnClass = 'btn btn-success';
    } else if (this.type === 'info') {
      this.btnClass = 'btn btn-info';
    } else if (this.type === 'warning') {
      this.btnClass = 'btn btn-warning';
    } else if (this.type === 'danger') {
      this.btnClass = 'btn btn-danger';
    } else if (this.type === 'link') {
      this.btnClass = 'btn btn-link';
    } else if (this.type === 'default') {
      this.btnClass = 'btn btn-default';
    }
    if (this.size && this.size.length > 0) {
      if (this.size === 'xs') {
        this.btnClass = this.btnClass + ' btn-xs';
      } else if (this.size === 'sm') {
        this.btnClass = this.btnClass + ' btn-sm';
      } else if (this.size === 'lg') {
        this.btnClass = this.btnClass + ' btn-lgxs';
      }
    }
  }
  onClick() {
    this.ngClick.emit(this.click());
  }
}
