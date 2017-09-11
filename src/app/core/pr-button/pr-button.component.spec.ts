import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrButtonComponent } from './pr-button.component';

describe('PrButtonComponent', () => {
  let component: PrButtonComponent;
  let fixture: ComponentFixture<PrButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
