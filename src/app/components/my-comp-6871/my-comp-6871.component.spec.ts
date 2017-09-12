import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6871Component } from './my-comp-6871.component';

describe('MyComp6871Component', () => {
  let component: MyComp6871Component;
  let fixture: ComponentFixture<MyComp6871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
