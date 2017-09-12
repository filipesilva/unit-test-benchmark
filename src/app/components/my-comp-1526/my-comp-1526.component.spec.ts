import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1526Component } from './my-comp-1526.component';

describe('MyComp1526Component', () => {
  let component: MyComp1526Component;
  let fixture: ComponentFixture<MyComp1526Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1526Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
