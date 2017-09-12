import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6822Component } from './my-comp-6822.component';

describe('MyComp6822Component', () => {
  let component: MyComp6822Component;
  let fixture: ComponentFixture<MyComp6822Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6822Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
