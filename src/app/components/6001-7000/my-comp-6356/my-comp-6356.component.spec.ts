import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6356Component } from './my-comp-6356.component';

describe('MyComp6356Component', () => {
  let component: MyComp6356Component;
  let fixture: ComponentFixture<MyComp6356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
