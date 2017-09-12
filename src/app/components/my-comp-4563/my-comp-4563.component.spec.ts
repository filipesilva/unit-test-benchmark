import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4563Component } from './my-comp-4563.component';

describe('MyComp4563Component', () => {
  let component: MyComp4563Component;
  let fixture: ComponentFixture<MyComp4563Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4563Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
