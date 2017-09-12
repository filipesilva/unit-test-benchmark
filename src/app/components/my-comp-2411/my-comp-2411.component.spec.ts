import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2411Component } from './my-comp-2411.component';

describe('MyComp2411Component', () => {
  let component: MyComp2411Component;
  let fixture: ComponentFixture<MyComp2411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
