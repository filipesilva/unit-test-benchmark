import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6705Component } from './my-comp-6705.component';

describe('MyComp6705Component', () => {
  let component: MyComp6705Component;
  let fixture: ComponentFixture<MyComp6705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
