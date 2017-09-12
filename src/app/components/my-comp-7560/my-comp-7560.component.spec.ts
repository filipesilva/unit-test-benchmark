import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7560Component } from './my-comp-7560.component';

describe('MyComp7560Component', () => {
  let component: MyComp7560Component;
  let fixture: ComponentFixture<MyComp7560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7560Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
