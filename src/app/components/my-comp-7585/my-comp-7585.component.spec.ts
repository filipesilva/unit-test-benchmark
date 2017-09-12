import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7585Component } from './my-comp-7585.component';

describe('MyComp7585Component', () => {
  let component: MyComp7585Component;
  let fixture: ComponentFixture<MyComp7585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
