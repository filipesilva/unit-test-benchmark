import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7659Component } from './my-comp-7659.component';

describe('MyComp7659Component', () => {
  let component: MyComp7659Component;
  let fixture: ComponentFixture<MyComp7659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7659Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
