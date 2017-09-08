import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrInputComponent } from './pr-input.component';

describe('PrInputComponent', () => {
  let component: PrInputComponent;
  let fixture: ComponentFixture<PrInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
