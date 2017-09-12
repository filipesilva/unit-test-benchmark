import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5450Component } from './my-comp-5450.component';

describe('MyComp5450Component', () => {
  let component: MyComp5450Component;
  let fixture: ComponentFixture<MyComp5450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
