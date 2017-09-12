import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2560Component } from './my-comp-2560.component';

describe('MyComp2560Component', () => {
  let component: MyComp2560Component;
  let fixture: ComponentFixture<MyComp2560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2560Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
