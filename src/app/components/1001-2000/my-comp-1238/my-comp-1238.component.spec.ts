import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1238Component } from './my-comp-1238.component';

describe('MyComp1238Component', () => {
  let component: MyComp1238Component;
  let fixture: ComponentFixture<MyComp1238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
