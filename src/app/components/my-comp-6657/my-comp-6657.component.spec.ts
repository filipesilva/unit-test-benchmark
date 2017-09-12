import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6657Component } from './my-comp-6657.component';

describe('MyComp6657Component', () => {
  let component: MyComp6657Component;
  let fixture: ComponentFixture<MyComp6657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
