import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1635Component } from './my-comp-1635.component';

describe('MyComp1635Component', () => {
  let component: MyComp1635Component;
  let fixture: ComponentFixture<MyComp1635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
