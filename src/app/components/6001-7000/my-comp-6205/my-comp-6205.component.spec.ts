import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6205Component } from './my-comp-6205.component';

describe('MyComp6205Component', () => {
  let component: MyComp6205Component;
  let fixture: ComponentFixture<MyComp6205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
