import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjworkedComponent } from './projworked.component';

describe('ProjworkedComponent', () => {
  let component: ProjworkedComponent;
  let fixture: ComponentFixture<ProjworkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjworkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjworkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
