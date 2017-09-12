import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4526Component } from './my-comp-4526.component';

describe('MyComp4526Component', () => {
  let component: MyComp4526Component;
  let fixture: ComponentFixture<MyComp4526Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4526Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
