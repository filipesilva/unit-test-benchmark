import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7526Component } from './my-comp-7526.component';

describe('MyComp7526Component', () => {
  let component: MyComp7526Component;
  let fixture: ComponentFixture<MyComp7526Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7526Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
