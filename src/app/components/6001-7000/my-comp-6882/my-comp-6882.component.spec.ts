import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6882Component } from './my-comp-6882.component';

describe('MyComp6882Component', () => {
  let component: MyComp6882Component;
  let fixture: ComponentFixture<MyComp6882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
