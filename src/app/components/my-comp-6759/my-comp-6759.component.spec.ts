import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6759Component } from './my-comp-6759.component';

describe('MyComp6759Component', () => {
  let component: MyComp6759Component;
  let fixture: ComponentFixture<MyComp6759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
