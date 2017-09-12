import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4306Component } from './my-comp-4306.component';

describe('MyComp4306Component', () => {
  let component: MyComp4306Component;
  let fixture: ComponentFixture<MyComp4306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4306Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
