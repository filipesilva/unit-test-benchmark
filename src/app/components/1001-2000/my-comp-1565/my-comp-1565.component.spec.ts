import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1565Component } from './my-comp-1565.component';

describe('MyComp1565Component', () => {
  let component: MyComp1565Component;
  let fixture: ComponentFixture<MyComp1565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1565Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
