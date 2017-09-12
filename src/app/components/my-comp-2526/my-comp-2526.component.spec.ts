import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2526Component } from './my-comp-2526.component';

describe('MyComp2526Component', () => {
  let component: MyComp2526Component;
  let fixture: ComponentFixture<MyComp2526Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2526Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
