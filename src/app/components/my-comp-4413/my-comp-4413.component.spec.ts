import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4413Component } from './my-comp-4413.component';

describe('MyComp4413Component', () => {
  let component: MyComp4413Component;
  let fixture: ComponentFixture<MyComp4413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
