import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7413Component } from './my-comp-7413.component';

describe('MyComp7413Component', () => {
  let component: MyComp7413Component;
  let fixture: ComponentFixture<MyComp7413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
