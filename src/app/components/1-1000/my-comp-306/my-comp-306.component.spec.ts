import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp306Component } from './my-comp-306.component';

describe('MyComp306Component', () => {
  let component: MyComp306Component;
  let fixture: ComponentFixture<MyComp306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp306Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
