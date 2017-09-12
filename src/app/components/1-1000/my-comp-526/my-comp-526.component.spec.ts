import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp526Component } from './my-comp-526.component';

describe('MyComp526Component', () => {
  let component: MyComp526Component;
  let fixture: ComponentFixture<MyComp526Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp526Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
