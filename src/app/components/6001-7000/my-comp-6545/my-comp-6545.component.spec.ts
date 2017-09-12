import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6545Component } from './my-comp-6545.component';

describe('MyComp6545Component', () => {
  let component: MyComp6545Component;
  let fixture: ComponentFixture<MyComp6545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
