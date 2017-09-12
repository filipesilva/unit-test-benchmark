import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp413Component } from './my-comp-413.component';

describe('MyComp413Component', () => {
  let component: MyComp413Component;
  let fixture: ComponentFixture<MyComp413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
