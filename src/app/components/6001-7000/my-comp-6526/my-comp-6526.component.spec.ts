import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6526Component } from './my-comp-6526.component';

describe('MyComp6526Component', () => {
  let component: MyComp6526Component;
  let fixture: ComponentFixture<MyComp6526Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6526Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
