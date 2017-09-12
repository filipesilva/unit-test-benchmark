import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9526Component } from './my-comp-9526.component';

describe('MyComp9526Component', () => {
  let component: MyComp9526Component;
  let fixture: ComponentFixture<MyComp9526Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9526Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
