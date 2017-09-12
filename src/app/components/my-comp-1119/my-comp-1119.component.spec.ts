import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1119Component } from './my-comp-1119.component';

describe('MyComp1119Component', () => {
  let component: MyComp1119Component;
  let fixture: ComponentFixture<MyComp1119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
