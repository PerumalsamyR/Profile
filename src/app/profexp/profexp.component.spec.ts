import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfexpComponent } from './profexp.component';

describe('ProfexpComponent', () => {
  let component: ProfexpComponent;
  let fixture: ComponentFixture<ProfexpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfexpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
