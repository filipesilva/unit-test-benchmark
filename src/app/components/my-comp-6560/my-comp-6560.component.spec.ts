import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6560Component } from './my-comp-6560.component';

describe('MyComp6560Component', () => {
  let component: MyComp6560Component;
  let fixture: ComponentFixture<MyComp6560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6560Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
