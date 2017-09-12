import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6072Component } from './my-comp-6072.component';

describe('MyComp6072Component', () => {
  let component: MyComp6072Component;
  let fixture: ComponentFixture<MyComp6072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
