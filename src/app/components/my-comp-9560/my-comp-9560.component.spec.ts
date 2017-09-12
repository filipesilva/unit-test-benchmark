import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9560Component } from './my-comp-9560.component';

describe('MyComp9560Component', () => {
  let component: MyComp9560Component;
  let fixture: ComponentFixture<MyComp9560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9560Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
