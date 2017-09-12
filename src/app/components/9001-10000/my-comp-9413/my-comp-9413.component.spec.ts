import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9413Component } from './my-comp-9413.component';

describe('MyComp9413Component', () => {
  let component: MyComp9413Component;
  let fixture: ComponentFixture<MyComp9413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
