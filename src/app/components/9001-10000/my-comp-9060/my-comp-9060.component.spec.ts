import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9060Component } from './my-comp-9060.component';

describe('MyComp9060Component', () => {
  let component: MyComp9060Component;
  let fixture: ComponentFixture<MyComp9060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
