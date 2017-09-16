import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrInputComponent } from './pr-input/pr-input.component';
import { PrButtonComponent } from './pr-button/pr-button.component';
import { PrDropdownComponent } from './pr-dropdown/pr-dropdown.component';
import { PrTextareaComponent } from './pr-textarea/pr-textarea.component';

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
    PrDropdownComponent,
    PrTextareaComponent,
  ],
  exports: [
    PrInputComponent,
    PrButtonComponent,
    PrTextareaComponent,
    PrDropdownComponent
  ],
})
export class CoreModule { }
