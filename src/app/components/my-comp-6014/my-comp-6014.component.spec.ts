import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6014Component } from './my-comp-6014.component';

describe('MyComp6014Component', () => {
  let component: MyComp6014Component;
  let fixture: ComponentFixture<MyComp6014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
