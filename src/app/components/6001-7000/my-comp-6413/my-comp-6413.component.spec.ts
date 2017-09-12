import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6413Component } from './my-comp-6413.component';

describe('MyComp6413Component', () => {
  let component: MyComp6413Component;
  let fixture: ComponentFixture<MyComp6413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
