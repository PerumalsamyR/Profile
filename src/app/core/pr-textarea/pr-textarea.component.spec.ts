import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrTextareaComponent } from './pr-textarea.component';

describe('PrTextareaComponent', () => {
  let component: PrTextareaComponent;
  let fixture: ComponentFixture<PrTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
