import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2708Component } from './my-comp-2708.component';

describe('MyComp2708Component', () => {
  let component: MyComp2708Component;
  let fixture: ComponentFixture<MyComp2708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2708Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
