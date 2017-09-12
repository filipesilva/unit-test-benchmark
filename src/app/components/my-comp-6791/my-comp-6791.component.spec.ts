import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6791Component } from './my-comp-6791.component';

describe('MyComp6791Component', () => {
  let component: MyComp6791Component;
  let fixture: ComponentFixture<MyComp6791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
