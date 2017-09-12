import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9815Component } from './my-comp-9815.component';

describe('MyComp9815Component', () => {
  let component: MyComp9815Component;
  let fixture: ComponentFixture<MyComp9815Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9815Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
