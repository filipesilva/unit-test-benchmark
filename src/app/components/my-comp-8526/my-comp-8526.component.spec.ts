import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8526Component } from './my-comp-8526.component';

describe('MyComp8526Component', () => {
  let component: MyComp8526Component;
  let fixture: ComponentFixture<MyComp8526Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8526Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
