import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1413Component } from './my-comp-1413.component';

describe('MyComp1413Component', () => {
  let component: MyComp1413Component;
  let fixture: ComponentFixture<MyComp1413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
