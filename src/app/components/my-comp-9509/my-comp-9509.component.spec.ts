import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9509Component } from './my-comp-9509.component';

describe('MyComp9509Component', () => {
  let component: MyComp9509Component;
  let fixture: ComponentFixture<MyComp9509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
