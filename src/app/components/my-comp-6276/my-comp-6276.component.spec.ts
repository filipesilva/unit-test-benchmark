import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6276Component } from './my-comp-6276.component';

describe('MyComp6276Component', () => {
  let component: MyComp6276Component;
  let fixture: ComponentFixture<MyComp6276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
