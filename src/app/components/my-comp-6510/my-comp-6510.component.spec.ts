import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6510Component } from './my-comp-6510.component';

describe('MyComp6510Component', () => {
  let component: MyComp6510Component;
  let fixture: ComponentFixture<MyComp6510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
