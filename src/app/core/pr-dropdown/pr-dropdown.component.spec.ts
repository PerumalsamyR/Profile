import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrDropdownComponent } from './pr-dropdown.component';

describe('PrDropdownComponent', () => {
  let component: PrDropdownComponent;
  let fixture: ComponentFixture<PrDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
