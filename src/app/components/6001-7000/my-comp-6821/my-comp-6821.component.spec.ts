import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6821Component } from './my-comp-6821.component';

describe('MyComp6821Component', () => {
  let component: MyComp6821Component;
  let fixture: ComponentFixture<MyComp6821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
