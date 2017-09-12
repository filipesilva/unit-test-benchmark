import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9928Component } from './my-comp-9928.component';

describe('MyComp9928Component', () => {
  let component: MyComp9928Component;
  let fixture: ComponentFixture<MyComp9928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
