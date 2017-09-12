import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6113Component } from './my-comp-6113.component';

describe('MyComp6113Component', () => {
  let component: MyComp6113Component;
  let fixture: ComponentFixture<MyComp6113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
