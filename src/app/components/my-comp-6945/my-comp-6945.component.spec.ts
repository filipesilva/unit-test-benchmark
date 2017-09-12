import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6945Component } from './my-comp-6945.component';

describe('MyComp6945Component', () => {
  let component: MyComp6945Component;
  let fixture: ComponentFixture<MyComp6945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
