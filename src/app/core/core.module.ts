import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrInputComponent } from './pr-input/pr-input.component';
import { PrButtonComponent } from './pr-button/pr-button.component';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdFormFieldModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  declarations: [
    PrInputComponent,
    PrButtonComponent,
  ],
  exports: [
    PrInputComponent,
    PrButtonComponent
  ],
})
export class CoreModule { }
