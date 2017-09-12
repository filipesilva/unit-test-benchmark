import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9822Component } from './my-comp-9822.component';

describe('MyComp9822Component', () => {
  let component: MyComp9822Component;
  let fixture: ComponentFixture<MyComp9822Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9822Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
